// implementation plugin routes from express
const router = require('express').Router()
const studentsRouter = require('./studentsRouter')
const usersRouter = require('./usersRouter')


// refactor router for students
router.use('/api/v1', studentsRouter)

// refactor router for users
router.use('/api/v1/users', usersRouter)


// export file router from other file
module.exports = router