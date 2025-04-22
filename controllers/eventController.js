//import the neede moduls
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Event = require('../models/Events')
const { Op } = require('sequelize')
// const {artistUpdateValidation} = require('../validation/artistValidation')


allEvents = async (req, res) =>{
    try {
        const allEvent = await User.findAll({
            where: {userType: "Event Organizer"},
            include: Event
        })
        if(allEvent) return res.status(200).json(allEvent)
    
        
    } catch (error) {
        
    }
  
}

module.exports ={
    allEvents,
}