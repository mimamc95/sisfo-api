// import Router
const router = require('express').Router()

// const { findAllStudent, getStudentbyId, createNewStudent, updateStudent, destroyStudent } = require('../controller/studentController')

router.get('/', (req, res) => {
    res.send('Ini response user router')
})

router.post('/', (req, res) => {
    res.send('Ini endpoint untuk created user / registrasi user')
})
// // router READ all student, import data from studentController
// router.get('/students', findAllStudent)

// // router READ student by id, import data from studentController
// router.get('/students/:id', getStudentbyId)

// // router CREATE data student, import data from studentController
// router.post('/students', createNewStudent)

// // router UPDATE data student, import data from studentController
// router.patch('/students/:id', updateStudent)

// // router DELETE data student, import data from studentController
// router.delete('/students/:id', destroyStudent)

// export file router from other file
module.exports = router