const mongoose = require('mongoose')
const { title } = require('process')


const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    unlikes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }
    ],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})

module.exports = mongoose.model("Post", PostSchema)