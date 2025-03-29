const { findAllStudent, getStudentbyId, createNewStudent, updateStudent } = require('../controller/studentController')

// implementation plugin routes from express
const router = require('express').Router()

// router READ all student, import data from studentController
router.get('/students', findAllStudent)

// router READ student by id, import data from studentController
router.get('/students/:id', getStudentbyId)

// router CREATE data student, import data from studentController
router.post('/students', createNewStudent)

// router UPDATE data student, import data from studentController
router.patch('/students/:id', updateStudent)

// export file router from other file
module.exports = router