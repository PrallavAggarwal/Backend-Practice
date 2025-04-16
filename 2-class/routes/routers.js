const express = require('express')
const { displayTask, addTask } = require('../controllers/todoControllers')
const router = express.Router()

router.get('/displayTasks', displayTask)
router.post('/addTasks', addTask)


module.exports = router