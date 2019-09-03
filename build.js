const fse = require('fs-extra')
const path = require('path')
const { promisify } = require('util')
const globP = promisify(require('glob'))
const frontMatter = require('front-matter')
const pug = require('pug');
const marked = require('marked')
const moment = require('moment')
const srcPath = './source'
const distPath = './public'
const hostname = 'https://ravivyas.com'

// clear destination folder
fse.emptyDirSync(distPath)

// copy assets folder
fse.copy(`${srcPath}/assets`, `${distPath}/assets`)

var posts = []

var pages = []

// read page templates
globP('**/*.md', { cwd: `${srcPath}/posts` })
    .then((files) => {
        console.log(`here`)

        var promises = files.map((file) => {
            // console.log(` Found Post ${file}`)
            const fileData = path.parse(file)
            // const destPath = path.join(distPath + "/posts", fileData.dir)
            const destPathStatic = path.join(distPath, fileData.dir)
            return fse.mkdirs(destPathStatic)
                .then(() => {
                    // read page file
                    return fse.readFile(`${srcPath}/posts/${file}`, 'utf-8')
                })
                .then((data) => {
                    // extract front matter
                    const pageData = frontMatter(data)
                    const pageContent = marked(pageData.body)
                    var date = new Date()
                    if (pageData.attributes.date) {
                        date = pageData.attributes.date
                        // console.log(date)
                    }
                    var title = ""
                    if (pageData.attributes.title) {
                        // console.log(pageData.attributes.title)
                        title = pageData.attributes.title
                    }

                    // const year = new Date().getFullYear()
                    const humanDate = moment(date).format("MMM Do YYYY");
                    const year = moment(date).format("YYYY");
                    const month = moment(date).format("MM");
                    const dateText = moment(date).format("DD");
                    const canonicalURL = `${hostname}/${pageData.attributes.canonicalURL}`

                    const options = { body: pageContent, humandate: humanDate, canonical:canonicalURL,  heading: title, date: year }
                    
                    if (pageData.attributes.type === "page") {
                        // Static pageContent, don't add to posts array, use static page pug, and create in root dir
                        const html = pug.renderFile(`${srcPath}/layouts/staticPage.pug`, { options })
                        fse.writeFile(`${destPathStatic}/${fileData.name}.html`, html)
                        return file
                    } else {

                        // // Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
                        // fse.mkdir(`${destPathStatic}/${year}/${month}/${dateText}`, { recursive: true }, (err) => {
                        //     if (err) throw err;
                        // });
                        
                        // console.log(options.canonical)
                        const html = pug.renderFile(`${srcPath}/layouts/post.pug`, { options })
                        fse.outputFile(`${destPathStatic}/${year}/${month}/${dateText}/${fileData.name}.html`, html, (err) => {
                            if (err) throw err;
                        } )
                        posts.push({ heading: title, humandate: humanDate,date:date, filename: `${year}/${month}/${dateText}/${fileData.name}.html` })
                        return file
                    }
                
                })
                .catch((err) => { console.error(err) })
        })

        Promise.all(promises).then(function (results) {
            posts.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
              });

            const options = { allPosts: posts, heading: "Home" }
            console.log("Posts Created: " + options.allPosts.length)
            const html = pug.renderFile(`${srcPath}/layouts/home.pug`, { options })
            fse.writeFile(`./public/index.html`, html)
        })

    })


