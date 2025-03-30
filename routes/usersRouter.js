// import Router
const router = require('express').Router()

const { registerUser, findAllUser, getUserbyId, updateUser, destroyUser } = require('../controller/usersController')


// router CREATE data user, import data from usersController
router.post('/register', registerUser)

// router READ all user, import data from usersController
router.get('/', findAllUser)

// router READ user by id, import data from usersController
router.get('/:id', getUserbyId)

// router UPDATE data user, import data from usersController
router.patch('/:id', updateUser)

// // router DELETE data USER, import data from usersController
router.delete('/:id', destroyUser)



// export file router from other file
module.exports = router