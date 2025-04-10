// create a Kelas model to communicate with the database
const { Kelas } = require('../models')

// create router endpoint makul for create new kelas 
const createNewKelas = async (req, res, next) => {
    console.log('<<< Create New Kelas')
    
    // try {
    //     // get request body
    //     const { kode, nama, makulId, fakultas } = req.body

    //     // add to new data kelas
    //     const dataKelas = await Kelas.create({
    //         kode: kode,
    //         nama: nama,
    //         makulId: makulId,
    //         fakultas: fakultas
    //     })

    //     // return response to client
    //     res.status(201).json({
    //         status: 'Ok',
    //         data: {
    //             kode: dataKelas.kode,
    //             nama: dataKelas.nama,
    //             makulId: dataKelas.makulId,
    //             fakultas: dataKelas.fakultas,
    //             createdAt: dataKelas.createdAt,
    //             updatedAt: dataKelas.updatedAt
    //         }
    //     })

    // } catch (error) {
    //     console.log(error, '<<< Error Create New Data Kelas')
    //     // call middleware errHandler
    //     next(error)
    // }
}

module.exports = { createNewKelas }