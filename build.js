const fse = require('fs-extra')
const path = require('path')
const { promisify } = require('util')
const globP = promisify(require('glob'))
const frontMatter = require('front-matter')
const marked = require('marked')
const srcPath = './source'
const distPath = './public'

// clear destination folder
fse.emptyDirSync(distPath)

// copy assets folder
fse.copy(`${srcPath}/assets`, `${distPath}/assets`)

// read page templates
globP('**/*.md', { cwd: `${srcPath}/posts` })
    .then((files) => {
        files.forEach((file) => {
            console.log(` Found Post ${file}`)
            const fileData = path.parse(file)
            const destPath = path.join(distPath, fileData.dir)
            fse.mkdirs(destPath)
                .then(() => {
                    // read page file
                    return fse.readFile(`${srcPath}/posts/${file}`, 'utf-8')
                })
                .then((data) => {
                    // extract front matter
                    const pageData = frontMatter(data)
                    pageContent = marked(pageData.body)
                    console.log(pageContent)
                    console.log("\n\n\n\n")
                })
                .catch((err) => { console.error(err) })
        })
    })

    .catch((err) => { console.error(err) })