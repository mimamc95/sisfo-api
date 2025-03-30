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


// export controller functions so they can be accessed in other files
module.exports = { registerUser }