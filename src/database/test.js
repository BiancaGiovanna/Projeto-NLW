// const dataBase = require('./db.js')
// const createProffy = require('./crateProffy')
//     dataBase.then(async(db) =>{

//         proffyValue={
//             name: "Diego Fernandes", 
//             avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
//             whatsapp: "123", 
//             bio: "Entusiasta das melhores tecnologias de química avançada Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
            
//         }
//         classValue = {
//             subject: 1 , 
//             cost:"20,00"
//             // o proffy id vira pelo banco de dados
//         }

//         classScheduleValues = [
//             // class_id virá pelo banco de dados, após cadastramos a class
//             {
//                 weekday:1,
//                 time_from: 720,
//                 time_to: 1220
//             },
//             {
//                 weekday: 0,
//                 time_from: 520,
//                 time_to: 1220
//             }
//         ]

//         // await createProffy(db, {proffyValue, classValue, classScheduleValues})

//         // consutar dados
//         const selectedProffys = await db.all("SELECT * FROM proffys")
//         // console.log(selectedProffys)

//         const selectClassesAndProffys = await db.all(`
//             SELECT classes.*, proffys.*
//             FROM proffys
//             JOIN classes ON(classes.proffy_id= proffys.id)
//             WHERE classes.proffy_id = 1;
//         `)

//         const selectClassesSchedules = await db.all(`
//          SELECT class_schedule.*
//          FROM class_schedule
//          WHERE class_schedule.class_id = "1"
//          AND class_schedule.weekday = "0"
//          AND class_schedule.time_from <="1300";
//          AND class_schedule.time_to > "1300"

//          `)
//         console.log(selectClassesSchedules)

//     })  