//import models
const Todo = require('../models/todo')

exports.addTask = async (req, res) => {
    try{    
        //fetch from req.body
        const {title, description} = req.body

        //validation
        if(!title || !description){
            return res.status(404).json({
                success:false,
                message:"Add both title and description.",
            })
        }

        const response = await Todo.create({
            title:title,
            description:description
        })

        console.log(response)

        return res.status(201).json({
            success:true,
            message:"task added to db.",
            response,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Something unexpected happened while adding task."
        })
    }
}

exports.displayTask = async (req, res) => {
    try{
        //fetching from database
        const response = await Todo.find({})
        console.log("response for displaying tasks :", response)
        return res.status(200).json({
            success:true,
            message:"displaying all records.",
            response,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:`error while displaying task : ${error}`,
        })
    }
}