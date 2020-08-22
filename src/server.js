// Server
const express = require('express')
const nunjucks = require('nunjucks') 
const server = express()

const {pageLandig, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// configurar nunjucks (template engine)
nunjucks.configure('src/views', { 
    express: server,
    noCache: true,
})

// inicio e configuração do servidor
server
.use(express.urlencoded({extend: true}))
// configurar aquivos estáticos
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLandig)
.get("/study", pageStudy)
.get("/giveClasses", pageGiveClasses)
.post("saveClasses", saveClasses)

// star do servidor
.listen(5500)