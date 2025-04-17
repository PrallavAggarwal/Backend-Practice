const Post = require('../models/Post.model')
const Comment = require('../models/Comment.model')

exports.createcomment = async (req, res) => {
    try {
        //fetch data
        const {user, body, post} = req.body
        //validations
        if(!user){ 
            return res.status(400).json({
                message:"no anonymous comments allowed please mention user name.",
            })
        }
        if(!body){
            return res.status(400).json({
                message:"please write something to comment. No empty comments allowed."
            })
        }
        if(!post){
            return res.status(400).json({
                message:"please mention post on which you want to comment."
            })
        }
        //storing comment on comment schema
        const commentStored = await Comment.create({
            body,
            user,
            post
        }) 
        console.log(`new comment body : ${commentStored}`)
        //storing comment id on specified post
        const updatedPost = await Post.findByIdAndUpdate({_id : post}, {$push : {comments: commentStored._id}})
        console.log("post after adding comment : ", updatedPost)

        //returning successful response
        return res.status(200).json({
            success: true,
            updatedPost: updatedPost,
            commentStored: commentStored,
        })
    } catch (error) {
        console.log(`error while making comment : ${error.message}`)
        return res.status(400).json({
            success:false,
            message: "comment not made successsfully some error occured."
        })
    }
}

