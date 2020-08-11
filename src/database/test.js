const database = require('./db.js')
const createProffy = require('./createProffy')


database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: 'Gabriel',
        avatar: 'https://avatars0.githubusercontent.com/u/53201157?s=460&u=96eeda790d921fa37f1e231c29784f8e07c473b4&v=4',
        whatsapp: "11956295523",
        bio: 'Instrutor qualificado'
    }

    classValue = {
        subject: 1,
        cost: "50"
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 2,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado proffessor
    // e trazer junto os dados do professor
    const selecteClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selecteClassesAndProffys)
    
    // o horário que o proffy trabalha, por exemplo, é das 8h as 18h
    // o horário do time_from (8h) precisa se menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)

})