const { error } = require('console')
const mongoose = require('mongoose')
require('dotenv').config()



exports.dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {console.log("connected to database successfully.")})
    .catch((error) => {console.log(`error while connecting database : ${error}`)})
}