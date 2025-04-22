//import the neede moduls
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Event = require('../models/Events')
const { Op } = require('sequelize')
const {artistUpdateValidation} = require('../validation/artistValidation')


allEvents = async (req, res) =>{
    const allEvent = await Event.findAll()
    if(allEvent) return res.status(200).json(allEvent)

}

module.exports ={
    allEvents,
}