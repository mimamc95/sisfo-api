// create a Dosen model to communicate with the database
const { Dosens } = require('../models')


// create router endpoint makul for create new dosen 
const createNewDosen = async (req, res, next) => {
    console.log('Ini endpoint createNewDosen')

    try {
        // get request body
        const { nama, email, nidn, fakultas } = req.body
        const userId = 1 // hardcode userId for now

        // add to new data dosens
        const dataDosen = await Dosens.create({
            userId: userId,
            nama: nama,
            email: email,
            nidn: nidn,
            fakultas: fakultas
        })

        // return response to client
        res.status(201).json({
            status: 'Ok',
            data: {
                id: dataDosen.id,
                userId: dataDosen.userId,
                nama: dataDosen.nama,
                email: dataDosen.email,
                nidn: dataDosen.nidn,
                fakultas: dataDosen.fakultas,
                createdAt: dataDosen.createdAt,
                updatedAt: dataDosen.updatedAt
            }
        })

    } catch (error) {
        console.log(error, '<<< Error Create New Data Dosen')
        // call middleware errHandler
        next(error)
    }
}

// create router endpoint  students for read all data dosen
const findAllDosen = async (req, res, next) => {
    try {
        // get data from data from database users
        const dataDosen = await Dosens.findAll()

        // return with json
        const result = {
            status: 'Ok',
            data: dataDosen
        }
        res.json(result)

    } catch (error) {
        console.log(error, '<<< Error find all data dosen')
        // call middleware errHandler
        next(error)
    }

}

// create router endpoint user for find/read user by id
const getDosenbyId = async (req, res, next) => {
    try {
        // get id from  requést params
        const { id } = req.params
        const dataDosen = await Dosens.findByPk(id)

        // if data dosen null/undifined, send status 404 not found
        if (dataDosen === null) {
            res.status(404).json({
                status: 'Failed',
                message: `Data with id ${id} is not found`
            })
        }

        // return response to client with json/api
        res.status(200).json({
            status: 'Ok',
            data: dataDosen
        })

    } catch (error) {
        console.log(error, '<<< Error get dosens by id')
        // call middleware errHandler
    }

}

// create router endpoint user for find/read user by id
const updateDosen = async (req, res, next) => {
    try {
        // get req.params to get data user by id
        const { id } = req.params
        // get req.body to get { userId, nama, email, nidn, fakultas }
        const { nama, email, nidn, fakultas } = req.body
        const userId = 1 // hardcode userId for now

        // connect data by id
        const dataDosen = await Dosens.findByPk(id)

        // if not found, return response status 404
        if (!dataDosen) {
            return res.status(404).json({
                status: 'Failed',
                message: `Data with id ${id} is not found`
            })
        }

        // if found,update data with the one obtained from req.body
        dataDosen.userId = userId
        dataDosen.nama = nama
        dataDosen.email = email
        dataDosen.nidn = nidn
        dataDosen.fakultas = fakultas
        dataDosen.updatedAt = new Date()

        // save data with sequeize function
        await dataDosen.validate()
        await dataDosen.save()

        // return response to client
        res.status(200).json({
            status: 'Ok',
            data: {
                id: dataDosen.id,
                userId: dataDosen.userId,
                nama: dataDosen.nama,
                email: dataDosen.email,
                nidn: dataDosen.nidn,
                fakultas: dataDosen.fakultas,
                updatedAt: dataDosen.updatedAt

            }
        })

    } catch (error) {
        console.log(error, '<<< Error update data dosen')
        // call middleware errHandler
        next(error)
    }

}

// create router endpoint makul for delete makul 
const destroyDosen = async (req, res, next) => {
    try {
        // get req.params to get data user by id
        const { id } = req.params
        // connect data by id
        const dataDosen = await Dosens.findByPk(id)
        // if data not found, response status 404
        if (!dataDosen) {
            res.status(404).json({
                status: 'Failed',
                message: `Data with id ${id} is not found`
            })
        }

        // if data found, delete data using sequelize function
        await dataDosen.destroy()

        // return response to client
        res.status(200).json({
            status: 'Ok',
            message: `Data with id ${id} success deleted`
        })
    } catch (error) {
        console.log(error, '<<< Error delete dosen')
        // call middleware errHandler
        next(error)
    }

}
// export controller functions so they can be accessed in other files
module.exports = { createNewDosen, findAllDosen, getDosenbyId, updateDosen, destroyDosen }