const {Sequelize, DataTypes, ENUM, hasMany} = require('sequelize')
const db = require('../config/db_config')
const Booking = require('./Bookings')
const { FOREIGNKEYS } = require('sequelize/lib/query-types')

const Artist = db.define(
    'Artist', {
        artistId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        genre: {
            type: DataTypes.STRING, 
            allowNull: true,
        },
        availability: {
            type: DataTypes.ENUM('Artist', 'Venue Owner', 'Event Organizer'), 
            allowNull: true,
        }, 
        portforlioLink: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
       
        // availabi: {
        //     type: DataTypes.ENUM('Artist', 'Venue Owner', 'Event Organizer')
        // },
    }
)

// database associations
Artist.hasMany(Booking, {foreignKeys: 'bookingId'})
Booking.belongsTo(Artist) 



module.exports = Artist
return Artist