// create a students model to communicate with the database
const { User } = require('../models')

// create router endpoint user for create new user 
const registerUser = async (req, res, next) => {
    try {
        // get request body
        const { nama, email, password } = req.body

        // add to new data student
        const newUser = await User.create({
            nama: nama,
            email: email,
            password: password
        })

        // return response to client
        res.status(201).json({
            status: 'Ok',
            data: {
                id: newUser.id,
                nama: newUser.nama,
                email: newUser.email,
                password: newUser.password,
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

// create router endpoint user for find/read all user 
const findAllUser = async (req, res, next) => {
    try {
        // get data from data from database users
        const dataUser = await User.findAll()
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

        const dataUser = await User.findByPk(id)
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
        const { nama, email, password } = req.body
        // connect data by id
        const user = await User.findByPk(id)
        // if not found
        if (!user) {
            return res.status(404).json({
                status: 'Failed',
                message: `Data user with id ${id} is not exists`
            })
        }

        // if found,update data with the one obtained from req.body
        user.nama = nama
        user.email = email
        user.password = password
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

// export controller functions so they can be accessed in other files
module.exports = { registerUser, findAllUser, getUserbyId, updateUser }