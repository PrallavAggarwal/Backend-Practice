const Post = require('../models/Post.model')


exports.createpost = async (req, res) => {
    try {
        //fetch data
        const {title, body} = req.body
        //validation
        if(!title){
            return res.status().json({
                message:"post must have title."
            })
        }
        if(!body){
            return res.status().json({
                message:"post must have body."
            })
        }
        //storing to database
        const response = await Post.create({
            title,
            body
        })

        return res.status().json({
            success:true,
            message:"post created.",
            response,
        })

    } catch (error) {
        console.log(`error while creating post : ${error.message}`)
        return res.status().json({
            success:false,
            message: "can not create some error occured.",
            error: error
        })
    }
}

exports.updatepost = async (req, res) => {
    try {
        //fetch data
        const id = req.params.id
        const {title, body} = req.body
        //validation
        if(!title){
            return res.status().json({
                message:"post must have title."
            })
        }
        if(!body){
            return res.status().json({
                message:"post must have body."
            })
        }
        //storing to database
        const response = await Post.findByIdAndUpdate(id,{
            title,
            body
        })

        return res.status().json({
            success:true,
            message:"post updated.",
            response,
        })

    } catch (error) {
        console.log(`error while updating post : ${error.message}`)
        return res.status().json({
            success:false,
            message: "can not update post some error occured.",
            error: error
        })
    }
}

exports.deletepost = async (req, res) => {
    try {
        //fetch data
        const {id} = req.params.id
        //deleting from database
        const response = await Post.findByIdAndDelete(id)

        return res.status().json({
            success:true,
            message:"post deleted.",
            response,
        })

    } catch (error) {
        console.log(`error while deleting post : ${error.message}`)
        return res.status().json({
            success:false,
            message: "can not delete post some error occured.",
            error: error
        })
    }
}

exports.getpost = async (req, res) => {
    try {
        const response = await Post.find({})
        console.log(`response while displaying all posts : ${response}`)
        return res.status().json({
            success:true,
            message:"all posts displayed.",
            response,
        })

    } catch (error) {
        console.log(`error while fetching all post : ${error.message}`)
        return res.status().json({
            success:false,
            message: "can not display post, some error occured.",
            error: error
        })
    }
}

