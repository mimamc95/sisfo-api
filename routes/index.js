// implementation plugin routes from express
const router = require('express').Router()
const studentsRouter = require('./studentsRouter')
const usersRouter = require('./usersRouter')
const mataKuliahRouter = require('./mataKuliahRouter')


// refactor router for students
router.use('/api/v1', studentsRouter)

// refactor router for users
router.use('/api/v1/users', usersRouter)

// refactor router for matakuliahs
router.use('/api/v1/matakuliah', mataKuliahRouter)


// export file router from other file
module.exports = router