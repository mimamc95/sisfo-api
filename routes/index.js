const { findAllStudent } = require('../controller/studentController')

// implementation plugin routes from express
const router = require('express').Router()

// create router GET /students, get data from studentController
router.get('/students', findAllStudent)

// export file router from other file
module.exports = router