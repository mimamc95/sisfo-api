// import Router
const router = require('express').Router()

const { registerUser, findAllUser, getUserbyId, updateUser } = require('../controller/usersController')


// router CREATE data user, import data from usersController
router.post('/register', registerUser)

// router READ all user, import data from usersController
router.get('/', findAllUser)

// router READ user by id, import data from usersController
router.get('/:id', getUserbyId)

// router UPDATE data user, import data from usersController
router.patch('/:id', updateUser)

// // router DELETE data student, import data from studentController
// router.delete('/students/:id', destroyStudent)



// export file router from other file
module.exports = router