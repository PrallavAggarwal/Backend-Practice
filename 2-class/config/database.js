// const { error } = require('console')
const mongoose = require('mongoose')
require('dotenv').config()


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {console.log("connected successfully.")})
    .catch((error) => {
        console.log("error while connected db : ", error)
        process.exit(1)
    })
}

module.exports = dbConnect