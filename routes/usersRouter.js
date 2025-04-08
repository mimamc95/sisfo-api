// import Router
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { registerUser, findAllUser, getUserbyId, updateUser, destroyUser, loginUser } = require('../controller/usersController')



// router CREATE data user, import data from usersController
router.post('/auth/register', registerUser)

// router login user, import data from usersController
router.post('/auth/login', loginUser)

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