// create a students model to communicate with the database
const { Student } = require('../models')

// create router endpoint  students for read all data students
const findAllStudent = async (req, res, next) => {

    // // get data from data from database students
    // const dataStd = students

    // // return data with json 
    // const result = {
    //     status: 'Ok',
    //     data: dataStd
    // }
    // res.json(result)

    try {
        // get data from data from database students
        const dataStd = await Student.findAll()
        // return data with json 
        const result = {
            status: 'Ok',
            data: dataStd
        }

        res.json(result)
    } catch (error) {
        console.log(error, '<<< Error find all students')
        // call middleware errHandler
        next(error)
    }

}

// create router endpoint  students for read data student by id
const getStudentbyId = async (req, res, next) => {

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
        // call middleware errHandler
        next(error)
    }

}

// create router endpoint  students for create data student 
const createNewStudent = async (req, res, next) => {

    try {
        // get request body
        const { nama, nim, email, jurusan, fakultas } = req.body

        // add to new data student
        const newStudent = await Student.create({
            nama: nama,
            nim: nim,
            email: email,
            jurusan: jurusan,
            fakultas: fakultas
        })

        // return response to client
        res.status(201).json({
            status: 'Ok',
            data: {
                id: newStudent.id,
                nama: newStudent.nama,
                nim: newStudent.nim,
                email: newStudent.email,
                jurusan: newStudent.jurusan,
                fakultas: newStudent.fakultas,
                createdAt: newStudent.createdAt,
                updatedAt: newStudent.updatedAt
            }
        })

    } catch (error) {
        console.log(error.message, '<<< Error create new student')
        // call middleware errHandler
        next(error)
    }

}

// create router endpoint  students for update data student 
const updateStudent = async (req, res, next) => {
    try {
        // get req.params to get data student by {id}
        const { id } = req.params

        // get req.body to get {nama, nim, jurusan}
        const { nama, nim, email, jurusan, fakultas } = req.body
        // connect data by id
        const student = await Student.findByPk(id)
        // if not found
        if (!student) {
            return res.status(404).json({
                status: 'Failed',
                message: `Data student with id ${id} is not exists`
            })
        }
        // if found, update data with the one obtained from req.body
        student.nama = nama
        student.nim = nim
        student.email = email
        student.jurusan = jurusan
        student.fakultas = fakultas
        student.updatedAt = new Date()

        // save data with sequelize function
        await student.validate()
        await student.save()

        // return response to client
        res.status(200).json({
            status: 'Ok',
            data: {
                id: student.id,
                nama: student.nama,
                nim: student.nim,
                email: student.email,
                jurusan: student.jurusan,
                fakultas: student.fakultas,
                createdAt: student.createdAt,
                updatedAt: student.updatedAt
            }
        })


    } catch (error) {
        console.log(error, '<<< Error update student')
        // call middleware errHandler
        next(error)
    }
}

// create router endpoint  students for delete data student 
const destroyStudent = async (req, res, next) => {
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

        // if found, destroy data with sequelize function
        student.destroy()

        // return response to client
        res.status(200).json({
            status: 'Ok',
            message: `Success delete data student with id ${id}`
        })

    } catch (error) {
        console.log(error, '<<< Error delete data student')
        // call middleware errHandler
        next(error)
    }
}

// export controller functions so they can be accessed in other files
module.exports = { findAllStudent, getStudentbyId, createNewStudent, updateStudent, destroyStudent }