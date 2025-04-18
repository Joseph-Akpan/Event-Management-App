const express = require('express')
const { allArtist, artistDetailsUpdate} = require('../controllers/artistController') 
const {authenticateToken} = require('../middleware/userMiddleware')

const artistRouter = express.Router()


artistRouter.get('/all-artist', allArtist)
artistRouter.post('/update', authenticateToken, artistDetailsUpdate)
// router.put('/update', authenticateToken, updateDetails)
// router.put('/password', authenticateToken, passwordUpdate)


module.exports = artistRouter