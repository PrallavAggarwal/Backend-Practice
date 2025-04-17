const express = require('express')
const { getpost, createpost, updatepost, deletepost } = require('../controllers/Post.controller')
const { likepost, getlikepost } = require('../controllers/Like.controller')
const { createcomment } = require('../controllers/Comment.controller')
const router = express.Router()



router.get('/getpost', getpost)
router.post('/createpost', createpost)
router.put('/updatepost/:id', updatepost)
router.delete('/deletepost/:id', deletepost)
router.post('/likepost', likepost)
// router.post('/unlikepost', )
router.get('/getlikepost', getlikepost)
router.post('/createcomment', createcomment)


module.exports = router