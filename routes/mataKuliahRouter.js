// import Router
const router = require('express').Router()

const { addMakul, findAllMakul, getMakulById } = require('../controller/mataKuliahController')


// router CREATE data makul, import data from mataKuliahController
router.post('/', addMakul)

// router READ all data makul, import data from mataKuliahController
router.get('/', findAllMakul)

// router READ data makul by id, import data from mataKuliahController
router.get('/:id', getMakulById)

module.exports = router