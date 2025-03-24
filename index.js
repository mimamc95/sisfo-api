const express = require('express')

const app = express()
const port = 3333

// representation of database of students
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

// create router students
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

app.get('/users/:id', (req, res) => {
    // console.log(req.params)
    const { id } = req.params
    res.send(`This is users with id ${id}`)
})
app.listen(port, () => console.log(`Server running on port ${port}`))