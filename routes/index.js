const { findAllStudent, getStudentbyId } = require('../controller/studentController')

// implementation plugin routes from express
const router = require('express').Router()

// create router GET /students, import data from studentController
router.get('/students', findAllStudent)

// create router GET /students/:id, import data from studentController
router.get('/students/:id', getStudentbyId)

// export file router from other file
module.exports = router