const express = require('express')
const { dbconnect } = require('./config/database')
const router = require('./routes/Routes')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000

app.use(express.json())

//router
app.use('/api/v1', router)

//db call
dbconnect()


//server call
app.listen(PORT, () => {
    console.log(`Successfully connected to port : ${PORT}`)
})


//default route
app.get('/', (req, res) => {
    res.send(`<h1>this is home page.</h1>`)
})