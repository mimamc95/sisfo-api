// // create a Kelas model to communicate with the database
// const { Kelas } = require('../models')

// // create router endpoint makul for create new kelas 
// const createNewKelas = async (req, res, next) => {
//     try {
//         // get request body
//         const { kelas, namaMahasiswa, nim, jurusan, fakultas } = req.body

//         // add to new data kelas
//         const dataKelas = await Kelas.create({
//             nama: nama,
//             email: email,
//             nip: nip,
//             fakultas: fakultas
//         })

//         // return response to client
//         res.status(201).json({
//             status: 'Ok',
//             data: {
//                 id: dataKelas.id,
//                 nama: dataKelas.nama,
//                 email: dataKelas.email,
//                 nip: dataKelas.nip,
//                 fakultas: dataKelas.fakultas,
//                 createdAt: dataKelas.createdAt,
//                 updatedAt: dataKelas.updatedAt
//             }
//         })

//     } catch (error) {
//         console.log(error, '<<< Error Create New Data Kelas')
//         // call middleware errHandler
//         next(error)
//     }
// }

// module.exports = { createNewKelas }