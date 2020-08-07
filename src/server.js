
const nunjucks = require("nunjucks")
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

nunjucks.configure("src/views", { 
    express: server,
    noCache: true,
})



server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
.get("/",pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
.listen(5500)

