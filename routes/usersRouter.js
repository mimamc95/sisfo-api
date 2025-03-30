// import Router
const router = require('express').Router()

const { registerUser } = require('../controller/usersController')


// router CREATE data user, import data from usersController
router.post('/register', registerUser)



// // router READ all student, import data from studentController
// router.get('/students', findAllStudent)

// // router READ student by id, import data from studentController
// router.get('/students/:id', getStudentbyId)


// // router UPDATE data student, import data from studentController
// router.patch('/students/:id', updateStudent)

// // router DELETE data student, import data from studentController
// router.delete('/students/:id', destroyStudent)



// export file router from other file
module.exports = router