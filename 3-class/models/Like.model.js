const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        trim: true,
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    like:{
        type:Boolean,
        required:true,
        default:false,
    },
    unlike:{
        type:Boolean,
        required:true,
        default:false,
    }
})

module.exports = mongoose.model("Like", LikeSchema)