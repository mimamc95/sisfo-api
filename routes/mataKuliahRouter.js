// import Router
const router = require('express').Router()

const { addMakul } = require('../controller/mataKuliahController')


// router CREATE data makul, import data from mataKuliahController

router.post('/', addMakul)

module.exports = router