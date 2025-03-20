const {Sequelize, DataTypes, ENUM} = require('sequelize')
const db = require('../config/db_config')
const Registration = require('./Registration')
const Ticket = require('./Tickets')

const Event = db.define(
    'Event', {
        eventId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        startDate: {
            type: DataTypes.DATE, 
            allowNull: true,
        },
        endDate: {
            type: DataTypes.DATE, 
            allowNull: true,
        },
        locationId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        organizationId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        capicity: {
            type: DataTypes.INTEGER, 
            allowNull: true,
        },
    }
)
Event.hasMany(Registration, {foreignKey:'regId'})
Registration.belongsTo(Event)

Event.hasMany(Ticket, {foreignKey:'ticketId'})
Ticket.belongsTo(Event)

module.exports = Event
return Event