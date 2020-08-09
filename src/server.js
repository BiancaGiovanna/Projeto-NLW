// data
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
        whatsapp: "", 
        bio: "Entusiasta das melhores tecnologias de química avançada Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Quimica" , 
        cost:"20,00", 
        weekday: [
            0
        ], 
        timeFrom: [720], 
        timeTo: [1220]
    },
    {
        name: "Mayk Brito", 
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQG66c6aTczvdQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=tysiyG6vO2UclM1tIBlStqH_xpzw7G61431Uyo2omXY", 
        whatsapp: "1234567899", 
        bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"', 
        subject: "Educação Física", 
        
        cost:"40,00", 
        weekday: [
            0
        ], 
        timeFrom: [720], 
        timeTo: [1220]
    },
    {
        name: "Tiago Luchtenberg", 
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQHfarmcSLlWtA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=kp57Leis9izzzuJRa0Kfu-nsz_mW1RNnO0wWtQCbG-s", 
        whatsapp: "", 
        bio: "As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido. Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.", subject:"Geografia" , 
        
        cost:"360,00", 
        weekday: [
            0
        ], 
        timeFrom: [720], 
        timeTo: [1220]
    }
]

const subjects=[
    "Artes",
    "Biologia",
    "Ciencias",
    "EducacaoFísica",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugues",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
// functions
function getSubject(subjectNumber){
    const arrayPosition= +subjectNumber - 1
    return subjects[arrayPosition]
} 

function pageLandig(req, res){

    return res.render("index.html")

}

function pageStudy(req, res){
        const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})

}

function pageGiveClasses(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length != 0

    if(isNotEmpty){

        data.subject = getSubject(data.subject)

        proffys.push(data)
        return res.redirect("/study")
    }

        return res.render("giveClasses.html", {subjects, weekdays})

}
// Server
const express = require('express')
const nunjucks = require('nunjucks') 
const server = express()

// configurar nunjucks (template engine)
nunjucks.configure('src/views', { 
    express: server,
    noCache: true,
})

// inicio e configuração do servidor
server
// configurar aquivos estáticos
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLandig)
.get("/study", pageStudy)
.get("/giveClasses", pageGiveClasses)

// star do servidor
.listen(5500)