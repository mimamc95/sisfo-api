// create a students model to communicate with the database
const { Student } = require('../models')

// create router endpoint  students for read all data students
const findAllStudent = async (req, res) => {

    // // get data from data from database students
    // const dataStd = students

    // // return data with json 
    // const result = {
    //     status: 'Ok',
    //     data: dataStd
    // }
    // res.json(result)

    try {
        const dataStd = await Student.findAll()

        const result = {
            status: 'Ok',
            data: dataStd
        }

        res.json(result)
    } catch (error) {
        console.log(error, '<<< Error find all students')
    }

}

// create router endpoint  students for read data student by id
const getStudentbyId = async (req, res) => {

    try {
        // get request params
        const { id } = req.params

        const dataStd = await Student.findByPk(id)
        // if data student null/undifined, send status 404 not found
        if (dataStd === null) {
            return res.status(404).json({
                status: 'Failed',
                message: `Data student with id ${id} is not found`
            })
        }

        // return response to client with json/api
        res.json({
            status: 'Ok',
            data: dataStd
        })

    } catch (error) {
        console.log(error, '<<< Error find student by id ')
    }

}


// create router endpoint  students for create data student 
const createNewStudent = (req, res) => {
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
}

// export controller functions so they can be accessed in other files
module.exports = { findAllStudent, getStudentbyId, createNewStudent }