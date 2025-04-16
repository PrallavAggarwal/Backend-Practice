const express = require('express')
const app = express()
const router = require('./routes/routers')
const dbConnect = require('./config/database')
require('dotenv').config()

app.use(express.json())

app.use('/api/v1', router)

dbConnect()

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server started at ${PORT} successfully.`)
})