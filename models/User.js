const {Sequelize, DataTypes, ENUM, hasMany} = require('sequelize')
const db = require('../config/db_config')
const Events= require('./Events')
const Venue = require('./Venues')
const Artist = require('./Artist')
const { FOREIGNKEYS } = require('sequelize/lib/query-types')

const User = db.define(
    'User', {
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING, 
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING, 
            allowNull: true,
        }, 
        username: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        email: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        userType: {
            type: DataTypes.ENUM('Artist', 'Venue Owner', 'Event Organizer'),
            allowNull: false,
        },
    }
)

// database associations
User.hasMany(Events, {foreignKeys: 'eventId'})
Events.belongsTo(User) 

User.hasOne(Artist, {foreignKeys: 'artistId'})
Artist.belongsTo(User) 

User.hasOne(Venue, {foreignKeys: 'venueId'})
Events.belongsTo(User) 





module.exports = User
return User