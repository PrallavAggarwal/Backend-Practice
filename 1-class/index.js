const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')

app.listen(3000, (req, res) => {
    console.log("Hello on port 3000")
    // res.send("hello on port 3000")
})

app.get('/get', (req,res) => {
    res.send("hello on port 3000")
    console.log("Hello on port 3000 via get request.")

})

// app.use(bodyParser())
app.use(express.json())

app.post('/post', (req, res) => {
    const {name, details} = req.body
    console.log(`name : ${name}, details : ${details}`)
})

mongoose.connect('mongodb://localhost:27017/bikes')
.then(() => {console.log("connection successful.")})
.catch(() => {console.log("connection failed")})