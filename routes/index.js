// implementation plugin routes from express
const router = require('express').Router()
const studentsRouter = require('./studentsRouter')
const usersRouter = require('./usersRouter')
const mataKuliahRouter = require('./mataKuliahRouter')
const dosensRouter = require('./dosensRouter')


// refactor router for students
router.use('/api/v1', studentsRouter)

// refactor router for users
router.use('/api/v1/users', usersRouter)

// refactor router for matakuliahs
router.use('/api/v1/matakuliah', mataKuliahRouter)

// refactor router for dosens
router.use('/api/v1/dosens', dosensRouter)


// export file router from other file
module.exports = router