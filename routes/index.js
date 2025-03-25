const { findAllStudent, getStudentbyId, createNewStudent } = require('../controller/studentController')

// implementation plugin routes from express
const router = require('express').Router()

// router READ all student, import data from studentController
router.get('/students', findAllStudent)

// router READ student by id, import data from studentController
router.get('/students/:id', getStudentbyId)

// router CREATE data student, import data from studentController
router.post('/students', createNewStudent)

// export file router from other file
module.exports = router