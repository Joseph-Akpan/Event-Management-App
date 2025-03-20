const express = require('express')
const {welcome,register, login, updateDetails } = require('../controllers/userController') 
const {authenticateToken} = require('../middleware/userMiddleware')

const router = express.Router()

router.get('/', welcome)
router.post('/register', register)
router.post('/login', /*authenticateToken*/ login)
router.put('/update', authenticateToken, updateDetails)


module.exports = router 