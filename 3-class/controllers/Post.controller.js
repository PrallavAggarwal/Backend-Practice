const Post = require('../models/Post.model')


exports.createpost = async (req, res) => {
    try {
        //fetch data
        const {title, body} = req.body
        //validation
        if(!title){
            return res.status(400).json({
                message:"post must have title."
            })
        }
        if(!body){
            return res.status(400).json({
                message:"post must have body."
            })
        }
        //storing to database
        const response = await Post.create({
            title,
            description:body
        })
        console.log("response while creating post : ", response)
        return res.status(200).json({
            success:true,
            message:"post created.",
            response,
        })

    } catch (error) {
        console.log(`error while creating post : ${error.message}`)
        return res.status(400).json({
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
        if(!title & !body){
            return res.status(400).json({
                message:"post must have either title or body or both."
            })
        }
        // if(!body){
        //     return res.status(400).json({
        //         message:"post must have body."
        //     })
        // }
        //storing to database
        const response = await Post.findByIdAndUpdate(id,{
            title,
            description:body
        })

        return res.status(200).json({
            success:true,
            message:"post updated.",
            response,
        })

    } catch (error) {
        console.log(`error while updating post : ${error.message}`)
        return res.status(400).json({
            success:false,
            message: "can not update post some error occured.",
            error: error
        })
    }
}

exports.deletepost = async (req, res) => {
    try {
        //fetch data
        const {id} = req.params
        //deleting from database
        const response = await Post.findByIdAndDelete(id, {new:true})

        return res.status(200).json({
            success:true,
            message:"post deleted.",
            response,
        })

    } catch (error) {
        console.log(`error while deleting post : ${error.message}`)
        return res.status(400).json({
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
        return res.status(200).json({
            success:true,
            message:"all posts displayed.",
            response,
        })

    } catch (error) {
        console.log(`error while fetching all post : ${error.message}`)
        return res.status(400).json({
            success:false,
            message: "can not display post, some error occured.",
            error: error
        })
    }
}

