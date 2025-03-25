const express = require('express')

// define
const app = express()
const port = 3333
const router = require('./routes/index')

// add middleware express for endpoint can accessing req.body with json
app.use(express.json())

// add middleware router for endpoint can accessing router
app.use(router)


app.get('/', (req, res) => {
    // create content type res.json for produce api
    res.json({ message: "hello world" })

    // create content type res.send for pruduce html
    // res.send('<h1>Hello World</h1>')
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


app.listen(port, () => console.log(`Server running on port ${port}`))