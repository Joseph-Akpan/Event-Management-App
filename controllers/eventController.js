//import the neede moduls
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Event = require('../models/Events')
const { Op } = require('sequelize')
// const {artistUpdateValidation} = require('../validation/artistValidation')

//-------------Get all Events organizers
allEvents = async (req, res) =>{
    try {
        const allEvent = await User.findAll({
            where: {userType: "Event Organizer"},
            include: Event
        })
        if(allEvent) return res.status(200).json(allEvent)
        return res.status(404).json({msg: "No records found"})
        
    } catch (error) {
        throw error
    }
}

//--------------------create events------------
createEvents = async (req, res) =>{
    try {
        const userId = req.user.userId
        
        console.log(userId)
    } catch (error) {
        throw error
    }
}

module.exports ={
    allEvents,
    createEvents,
}