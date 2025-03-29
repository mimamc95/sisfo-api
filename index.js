const express = require('express')

// define
const app = express()
const port = 3333
const router = require('./routes/index')
const errHandler = require('./middleware/errHandler')

// add middleware express for endpoint can accessing req.body with json
app.use(express.json())

// add middleware router for endpoint can accessing router
app.use(router)

// add middleware errHandler for endpoint can accessing router
app.use(errHandler)


app.get('/', (req, res) => {
    // create content type res.json for produce api
    res.json({ message: "hello world" })

    // create content type res.send for pruduce html
    // res.send('<h1>Hello World</h1>')
})

// output server on terminal
app.listen(port, () => console.log(`Server running on port ${port}`))