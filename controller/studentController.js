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
const createNewStudent = async (req, res) => {

    try {
        // get request body
        const { nama, nim, jurusan } = req.body

        // add to new data student
        const newStudent = await Student.create({
            nama: nama,
            nim: nim,
            jurusan: jurusan
        })

        // return response to client
        res.status(201).json({
            status: 'Ok',
            data: {
                id: newStudent.id,
                nama: newStudent.nama,
                nim: newStudent.nim,
                jurusan: newStudent.jurusan,
                createdAt: newStudent.createdAt,
                updatedAt: newStudent.updatedAt
            }
        })

    } catch (error) {
        console.log(error.message, '<<< Error create new student')
        res.status(422).json({
            status: 'Failed',
            errorMessage: error.message
        })
    }

}

// create router endpoint  students for update data student 
const updateStudent = async (req, res) => {
    try {
        // get req.params to get data student by {id}
        const { id } = req.params

        // get req.body to get {nama, nim, jurusan}
        const { nama, nim, jurusan } = req.body
        // connect data by id
        const student = await Student.findByPk(id)
        // if not found
        if (!student) {
            return res.status(404).json({
                status: 'Ok',
                message: `Data student with id ${id} is not exists`
            })
        }
        // if found, update data with the one obtained from req.body
        student.nama = nama
        student.nim = nim
        student.jurusan = jurusan
        student.updatedAt = new Date()

        // save data with sequelize function
        student.save()

        // return response to client
        res.status(200).json({
            status: 'Ok',
            data: {
                id: student.id,
                nama: student.nama,
                nim: student.nim,
                jurusan: student.jurusan,
                createdAt: student.createdAt,
                updatedAt: student.updatedAt
            }
        })


    } catch (error) {
        console.log(error, '<<< Error update student')
    }
}

// create router endpoint  students for delete data student 
const destroyStudent = async (req, res) => {
    try {
        // get req.params to get data student by {id}
        const { id } = req.params

        // connect data by id
        const student = await Student.findByPk(id)
        // if not found
        if (!student) {
            return res.status(404).json({
                status: 'Ok',
                message: `Data student with id ${id} is not exists`
            })
        }

        // if found, save data with sequelize function
        student.destroy()

        // return response to client
        res.status(204).json({
            status: 'Ok',
            message: `Success delete data student with id ${id}`
        })

    } catch (error) {
        console.log(error, '<<< Error delete data student')
    }
}

// export controller functions so they can be accessed in other files
module.exports = { findAllStudent, getStudentbyId, createNewStudent, updateStudent, destroyStudent }