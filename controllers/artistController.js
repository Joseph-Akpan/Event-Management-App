//import the neede moduls
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Artist = require('../models/Artist')
const { Op } = require('sequelize')
const {artistUpdateValidation} = require('../validation/artistValidation')

//check for the registered user is an artist using the user token ==> if yes
//update the artist details

const allArtist = async (req,res) => {
    try {
        const allArtists = await Artist.findAll({
            // where: {userType: "Artist"},
            // include: Artist
        })
        if(allArtists){
            return res.status(200).json(allArtists)
        }
    } catch (error) {
        throw error
    }  
}

// ------------------update artist details -------------------

const artistDetailsUpdate = async (req, res) =>{
  

    try {
        const loggedInArtist = req.user.userId
        const {genre, portforlioLink} = req.body

         //------------validate user details --------------
    const { error } = artistUpdateValidation.validate(req.body)
    if (error) { return res.json(error.details[0].message) }

    const ifUserExist =await User.findOne({
        where: {userId: loggedInArtist}
    })
    if(!ifUserExist){return res.status(404).json({msg: "User not in Database"})}

    
    const ifExist =await Artist.findOne({
        where: {userId: loggedInArtist}
    })
    if(ifExist){return res.status(200).json({msg : "User Exist already"}) }

    const detailsUpdate =await Artist.create({
        userId: loggedInArtist,
        genre: genre,
        portforlioLink: portforlioLink
    })
    if (detailsUpdate){
        return res.status(201).json({msg: "Artist details updated successfully"})
    }
    
        
    } catch (error) {
        throw error
        
    }

   

    

}

module.exports ={
    allArtist,
    artistDetailsUpdate,
}