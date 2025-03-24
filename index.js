const express = require('express')

const app = express()
const port = 3333


app.get('/', (req, res) => {
    // if want to return response with json
    res.json({message:"hello world"})

    // if want to return response with html
    // res.send('<h1>Hello World</h1>')
})

app.get('/users/:id', (req, res) => {
    // console.log(req.params)
    const {id} = req.params
    res.send(`This is users with id ${id}`)
})
app.listen(port, () => console.log(`Server running on port ${port}`))