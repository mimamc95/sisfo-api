// create a students model to communicate with the database
const { MataKuliah } = require('../models')

// create router endpoint makul for create new makul 
const addMakul = async (req, res, next) => {
    try {
        // get request body
        const { makul, kode, fakultas } = req.body
        // add to new data mata kuliah
        const newMakul = await MataKuliah.create({
            makul: makul,
            kode: kode,
            fakultas: fakultas
        })

        // return response to client
        res.status(201).json({
            status: 'Ok',
            data: {
                id: newMakul.id,
                makul: newMakul.makul,
                makul: newMakul.kode,
                fakultas: newMakul.fakultas,
                createdAt: newMakul.createdAt,
                updatedAt: newMakul.updatedAt
            }
        })

        // add to new data maka kuliah
    } catch (error) {
        console.log(error.message, '<<< Error add new MataKuliah')
        // call middleware errHandler
        next(error)
    }
}

// create router endpoint makul for find all makul 
const findAllMakul = async (req, res, next) => {
    try {
        // get data from data from database MataKuliahs
        const dataMakul = await MataKuliah.findAll()
        // return result with json
        const result = {
            status: 'Ok',
            data: dataMakul
        }
        res.json(result)

    } catch (error) {
        console.log(error, '<<< Error find all data Mata Kuliah')
        // call middleware errHandler
        next(error)
    }

}

// create router endpoint makul for find makul by id 
const getMakulById = async (req, res, next) => {
    try {
        // get id from request params
        const { id } = req.params
        const dataMakul = await MataKuliah.findByPk(id)

        // if data user null/undifined, send status 404 not found
        if (dataMakul === null) {
            return res.status(404).json({
                status: 'Failed',
                message: `Data with id ${id} is not found`
            })
        }
        // return response to client with json/api
        res.status(200).json({
            status: 'Ok',
            data: dataMakul
        })

    } catch (error) {
        console.log(error, '<<< Error get data Mata Kuliah by id')
        // call middleware errHandler
        next(error)
    }

}

// create router endpoint makul for update makul 
const updateMakul = async (req, res, next) => {

    try {
        // get req.params to get data user by id
        const { id } = req.params
        // get req.body to get { makul, kode, fakultas}
        const { makul, kode, fakultas } = req.body
        // connect data by id
        const dataMakul = await MataKuliah.findByPk(id)

        // if not found, return response status 404
        if (!dataMakul) {
            return res.status(404).json({
                status: 'failed',
                message: `Data with id ${id} is not found`
            })
        }

        // if found,update data with the one obtained from req.body
        dataMakul.makul = makul
        dataMakul.kode = kode
        dataMakul.fakultas = fakultas
        dataMakul.updatedAt = new Date()

        // save data with sequeize function
        await dataMakul.validate()
        await dataMakul.save()

        // return response to client
        res.status(200).json({
            status: 'Ok',
            data: {
                id: dataMakul.id,
                makul: dataMakul.makul,
                kode: dataMakul.kode,
                fakultas: dataMakul.fakultas,
                updatedAt: dataMakul.updatedAt
            }
        })

    } catch (error) {
        console.log(error, 'Error update data Mata Kuliah')
        // call middleware errHandler
        next(error)
    }
}

// create router endpoint makul for delete makul 
const destroyMakul = async (req, res, next) => {
    try {
        // get req.params to get data user by id
        const { id } = req.params
        // connect data by id
        const dataMakul = await MataKuliah.findByPk(id)

        // if data not found, response status 404
        if (!dataMakul) {
            res.status(404).json({
                status: 'Failed',
                message: `Data with id ${id} is not found`
            })
        }

        // if data found, delete data
        await dataMakul.destroy()

        // return response to client
        res.status(200).json({
           status:'Ok',
           message:`Data with id ${id} success deleted`
        })

    } catch (error) {
        console.log(error, '<<< Error delete dadata Mata Kuliah')
        //call middleware errHandler
        next(error)
    }
}

// export controller functions so they can be accessed in other files
module.exports = { addMakul, findAllMakul, getMakulById, updateMakul, destroyMakul }