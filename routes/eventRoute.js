const express = require('express')
const { allEvents,} = require('../controllers/eventController') 
const {authenticateToken} = require('../middleware/userMiddleware')
const eventRouter = express.Router()


eventRouter.get('/all-events', allEvents)



module.exports = eventRouter