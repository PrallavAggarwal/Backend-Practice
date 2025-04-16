const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
        trim:true,
    }, 
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
})