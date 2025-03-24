const express = require('express')

// define
const app = express()
const port = 3333
const router = require('./routes/index')

// add middleware express for endpoint can accessing req.body with json
app.use(express.json())

// app.use(router)

// array of object for representation of database students
const students = [
    { id: 1, nama: 'Rega Jeatreya', nim: 160801, jurusan: 'TI' },
    { id: 2, nama: 'Adelia Putri', nim: 160802, jurusan: 'TI' },
    { id: 3, nama: 'Prima Nugraha', nim: 160803, jurusan: 'TI' },
    { id: 4, nama: 'Risma Noviana', nim: 160804, jurusan: 'TI' },
    { id: 5, nama: 'Rifky Ananda', nim: 160805, jurusan: 'TI' },
]

app.get('/', (req, res) => {
    // create content type res.json for produce api
    res.json({ message: "hello world" })

    // create content type res.send for pruduce html
    // res.send('<h1>Hello World</h1>')
})

// create router endpoint  students for read all data students
app.get('/students', (req, res) => {
    // get data from data from database students
    const dataStd = students

    // return data with json 
    const result = {
        status: 'Ok',
        data: dataStd
    }
    res.json(result)
})


// create router endpoint create new student
app.post('/students', (req, res) => {
    // get request body
    const { nama, nim, jurusan } = req.body

    // get new id student
    const lastStudentId = students[students.length - 1].id
    const newIdStudent = lastStudentId + 1

    // add to new data student
    const newStudentData = { id: newIdStudent, nama: nama, nim: nim, jurusan: jurusan }
    students.push(newStudentData)

    // return response to client
    res.status(201).json({
        status: 'Ok',
        message: 'Success cretae new data student',
        data: newStudentData

    })
})



// create router endpoint  students for read data students by id
app.get('/students/:id', (req, res) => {
    // console.log(req.params)
    const { id } = req.params


    let student
    // proccessing data or looping data student
    for (let i = 0; i < students.length; i++) {
        // if data student id === id on req.params, save / use that data 
        if (students[i].id === Number(id)) {
            student = students[i]
        }

    }

    // if data student undifined, send status 404 not found
    if (student == undefined) {
        return res.status(404).json({
            status: 'Failed',
            message: `Data student with id ${id} is not found`
        })
    }

    // return response to client
    res.json({
        status: 'Ok',
        data: student
    })

    res.send(`This is users with id ${id}`)
})
app.listen(port, () => console.log(`Server running on port ${port}`))