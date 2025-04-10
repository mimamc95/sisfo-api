// create a user model to communicate with the database
const { Users } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// JWT secret (hardcoded, not .env)
const JWT_SECRET = 'supersecret123';

// create router endpoint user for register new user 
const registerUser = async (req, res, next) => {

    try {
        // get request body
        const { nama, username, email, password, role } = req.body;
        // validation role
        if (!['mahasiswa', 'dosen'].includes(role)) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Invalid role'
            })
        }

        // hashing / encrypt password using bcrypt
        const hash = await bcrypt.hash(password, 10);
        // add to new data student
        const newUser = await Users.create({
            nama: nama,
            username: username,
            email: email,
            password: hash,
            role: role
        })

        // return response to client
        res.status(201).json({
            status: 'Ok',
            data: {
                id: newUser.id,
                nama: newUser.nama,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role,
                createdAt: newUser.createdAt,
                updatedAt: newUser.updatedAt
            }
        })

    } catch (error) {
        console.log(error, '<<< Error register new user')
        // call middleware errHandler
        next(error)
    }
}

// create router endpoint user for login user 
const loginUser = async (req, res, next) => {


    try {
        // get request body
        const { email, password } = req.body
        // get data user by spesific email
        const dataUser = await Users.findOne({
            where: { email }
        })
        if (!dataUser) return res.status(404).json({
            status: 'Failed',
            message: 'User not found'
        })

        const valid = await bcrypt.compare(password, dataUser.password)
        if (!valid) return res.status(401).json({

            status: 'Failed',
            message: 'Incorrect password'
        })

        // token JWT for login
        const token = jwt.sign(
            {
                id: dataUser.id,
                email: dataUser.email,
                role: dataUser.role,
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        )
        // return result to client
        res.json({
            status: 'Ok',
            message: 'Login successful',
            token,
            data: {
                id: dataUser.id,
                username: dataUser.username,
                email: dataUser.email,
                role: dataUser.role,
            },
        })

    } catch (error) {
        console.log(error, '<<< Error login user')
        // call middleware errHandler
        next(error)
    }

}

// create router endpoint user for find/read all user 
const findAllUser = async (req, res, next) => {
    try {
        // get data from data from database users
        const dataUser = await Users.findAll()
        // return with json
        const result = {
            status: 'Ok',
            data: dataUser
        }
        res.json(result)

    } catch (error) {
        console.log(error, '<<< Error find all user')
        // call middleware errHandler
        next(error)
    }
}

// create router endpoint user for find/read user by id
const getUserbyId = async (req, res, next) => {
    try {
        // get requést params
        const { id } = req.params

        const dataUser = await Users.findByPk(id)
        // if data user null/undifined, send status 404 not found
        if (dataUser === null) {
            return res.status(404).json({
                status: 'Failed',
                message: `Data user with id ${id} is not found`
            })
        }

        // return response to client with json/api
        res.json({
            status: 'Ok',
            data: dataUser
        })

    } catch (error) {
        console.log(error, `Error find user by id ${id}`)
        // call middleware errHandler
        next(error)
    }
}

// create router endpoint user for find/read user by id
const updateUser = async (req, res, next) => {
    try {
        // get req.params to get data user by id
        const { id } = req.params

        // get req.body to get { nama, email, password}
        const { nama, username, email, password } = req.body
        // connect data by id
        const user = await Users.findByPk(id)
        // if not found
        if (!user) {
            return res.status(404).json({
                status: 'Failed',
                message: `Data user with id ${id} is not exists`
            })
        }

        // hashing / encrypt password using bcrypt
        const hash = await bcrypt.hash(password, 10);

        // if found,update data with the one obtained from req.body
        user.nama = nama
        user.username = username
        user.email = email
        user.password = hash
        user.updatedAt = new Date()

        // save data with sequeize function
        await user.validate()
        await user.save()

        // return response to client
        res.status(200).json({
            status: 'Ok',
            data: {
                id: user.id,
                nama: user.nama,
                username: user.username,
                email: user.email,
                password: user.password,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt

            }
        })

    } catch (error) {
        console.log(error, '<<< Error update student')
        // call middleware errHandler
        next(error)
    }
}

// create router endpoint user for find/read user by id
const destroyUser = async (req, res, next) => {
    try {
        // get req.params to get data user by id
        const { id } = req.params

        // connect data by id
        const user = await Users.findByPk(id)
        // if not found, response status 404 not found
        if (!user) {
            res.status(404).json({
                status: 'Failed',
                message: `Data user with id ${id} is not exists`
            })
        }
        // if data user founded, destroy data with sequielize function
        user.destroy()

        // return to client
        res.status(200).json({
            status: 'Ok',
            message: `Success delete data user with id ${id}`
        })

    } catch (error) {
        console.log(error, 'Error delete data user')
        // call middleware errHandler
        next(error)
    }
}
// export controller functions so they can be accessed in other files
module.exports = { registerUser, loginUser, findAllUser, getUserbyId, updateUser, destroyUser }