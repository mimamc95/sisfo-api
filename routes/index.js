// implementation plugin routes from express
const router = require('express').Router()
const studentsRouter = require('./studentsRouter')


// refactor router for students
router.use('/api/v1', studentsRouter)


// export file router from other file
module.exports = router