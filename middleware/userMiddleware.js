const jwt = require('jsonwebtoken');
require('dotenv').config()
const User = require('../models/User')

authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({msg: "Not authnorized"})
  }

  const verify = jwt.verify(token, process.env.privateKey )
  const {userId, username, email, role} = verify
  console.log(verify, userId, email, username, role)

}

module.exports ={
  authenticateToken
}


