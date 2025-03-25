// array of object for representation of database students
const students = [
    { id: 1, nama: 'Rega Jeatreya', nim: 160801, jurusan: 'TI' },
    { id: 2, nama: 'Adelia Putri', nim: 160802, jurusan: 'TI' },
    { id: 3, nama: 'Prima Nugraha', nim: 160803, jurusan: 'TI' },
    { id: 4, nama: 'Risma Noviana', nim: 160804, jurusan: 'TI' },
    { id: 5, nama: 'Rifky Ananda', nim: 160805, jurusan: 'TI' },
]

// create router endpoint  students for read all data students
const findAllStudent = (req, res) => {

    // get data from data from database students
    const dataStd = students

    // return data with json 
    const result = {
        status: 'Ok',
        data: dataStd
    }
    res.json(result)

}

// create router endpoint  students for read data student by id
const getStudentbyId = (req, res) => {
    // get request params
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

    // return response to client with json/api
    res.json({
        status: 'Ok',
        data: student
    })
}

// export controller functions so they can be accessed in other files
module.exports = { findAllStudent, getStudentbyId }