//import the neede moduls
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { Op } = require('sequelize')


//check for the registered user is an artist using the user token ==> if yes
//update the artist details