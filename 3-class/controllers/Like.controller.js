const Post = require('../models/Post.model')
const Like = require('../models/Like.model')

exports.likepost = async (req, res) => {
    try {
        //fetch data
        const {user, post, like, unlike} = req.body
        //validation
        if(unlike & like){
            return res.status().json({
                success:false,
                message:"You can not like and unlike at same time."
            })
        }
        if(!user){ 
            return res.status().json({
                message:"no anonymous likes allowed please mention user name.",
            })
        }
        if(!post){
            return res.status().json({
                message:"please mention post which you want to like."
            })
        }
        //add to like schema
        const updatedLike = await Like.create({
            user,
            post,
            like,
            unlike
        })
        //adding details to post schema
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : updatedLike._id}})
        console.log(`updated post after like/unlike : ${updatedPost}`)

        return res.status().json({
            success:true,
            message:"like/unlike added",
            updatedPost,
        })


    } catch (error) {
        console.log(`error while liking/unliking post : ${error.message}`)
        return res.status().json({
            success:false,
            message: "can not update like/unlike some error occured.",
            error: error
        })
    }
}

//get all liked post
exports.getlikepost = async (req, res) => {
    try {
        const response = await Like.find({like:true})
        console.log("response while finding liked post ", response)
        const likedpost = await Post.findById({id: response.post})
        console.log(`response of liked post : ${likedpost}`)
    } catch (error) {
        console.log(`error while fetching liked post : ${error.message}`)
        return res.status().json({
            success:false,
            message: "error while fetching liked post.",
            error: error
        })
    }
}