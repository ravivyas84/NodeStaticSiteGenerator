const fse = require('fs-extra')
const path = require('path')
const { promisify } = require('util')
const globP = promisify(require('glob'))
const frontMatter = require('front-matter')
const pug = require('pug');
const marked = require('marked')
const srcPath = './source'
const distPath = './public/posts'

// clear destination folder
fse.emptyDirSync(distPath)

// copy assets folder
fse.copy(`${srcPath}/assets`, `${distPath}/assets`)

var posts = []



// read page templates
globP('**/*.md', { cwd: `${srcPath}/posts` })
    .then((files) => {
        console.log(`here`)

        var promises = files.map((file) => {
            // console.log(` Found Post ${file}`)
            const fileData = path.parse(file)
            const destPath = path.join(distPath, fileData.dir)
            return fse.mkdirs(destPath)
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

                    // console.log("\n\n\n\n")
                    // console.log(pageContent)
                    // console.log("\n\n\n\n") 
                    const year = new Date().getFullYear()
                    const options = { body: pageContent, heading: title, date: year }
                    const html = pug.renderFile(`${srcPath}/layouts/post.pug`, { options })
                    fse.writeFile(`${destPath}/${fileData.name}.html`, html)
                    posts.push({ heading: title, date: pageData.attributes.date, filename: `posts/${fileData.name}.html` })
                    // console.log(posts.length)
                    return file
                })
                .catch((err) => { console.error(err) })
        })

        Promise.all(promises).then(function (results) {
            posts.sort(function(a,b){
                
                return new Date(b.date) - new Date(a.date);
              });

            const options = { allPosts: posts, heading: "Home" }
            console.log(options.allPosts.length)
            const html = pug.renderFile(`${srcPath}/layouts/home.pug`, { options })
            fse.writeFile(`./public/index.html`, html)
        })

    })


