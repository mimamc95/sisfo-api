// create a Dosen model to communicate with the database
const { Dosen } = require('../models')


// create router endpoint makul for create new dosen 
const createNewDosen = async (req, res, next) => {
    console.log('Ini endpoint createNewDosen')

    try {
        // get request body
        const { nama, email, nip, fakultas } = req.body

        // add to new data dosens
        const dataDosen = await Dosen.create({
            nama: nama,
            email: email,
            nip: nip,
            fakultas: fakultas
        })

        // return response to client
        res.status(201).json({
            status: 'Ok',
            data: {
                id: dataDosen.id,
                nama: dataDosen.nama,
                email: dataDosen.email,
                nip: dataDosen.nip,
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
        const dataDosen = await Dosen.findAll()

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
        const dataDosen = await Dosen.findByPk(id)

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
// export controller functions so they can be accessed in other files
module.exports = { createNewDosen, findAllDosen, getDosenbyId }