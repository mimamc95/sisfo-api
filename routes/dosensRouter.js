// import Router
const router = require('express').Router()

const { createNewDosen, findAllDosen, getDosenbyId, updateDosen, destroyDosen } = require('../controller/dosensController')

// router endpoint CREATE data dosen, import data from dosenController
router.post('/', createNewDosen)

// router endpoint READ all dosen, import data from dosenController
router.get('/', findAllDosen)

// router READ dosen by id, import data from dosenController
router.get('/:id', getDosenbyId)

// router UPDATE data dosen, import data from dosenController
router.patch('/:id', updateDosen)

// router DELETE data dosen, import data from dosenController
router.delete('/:id', destroyDosen)

// export file router from other file
module.exports = router