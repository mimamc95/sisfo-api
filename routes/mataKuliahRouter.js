// import Router
const router = require('express').Router()

const { addMakul, findAllMakul, getMakulById, updateMakul, destroyMakul } = require('../controller/mataKuliahController')


// router CREATE data makul, import data from mataKuliahController
router.post('/', addMakul)

// router READ all data makul, import data from mataKuliahController
router.get('/', findAllMakul)

// router READ data makul by id, import data from mataKuliahController
router.get('/:id', getMakulById)

// router UPDATE data makul by id, import data from mataKuliahController
router.patch('/:id', updateMakul)

// router DELETE data makul by id, import data from mataKuliahController
router.delete('/:id', destroyMakul)

module.exports = router