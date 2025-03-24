// implementation plugin route from express
const router = require('express').Router()

// create router GET /students
router.get('/students', (req, res) => {
    res.json({
        message: 'Ini dari router Get student'
    })
})

module.exports = router