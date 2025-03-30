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

// export controller functions so they can be accessed in other files
module.exports = { addMakul }