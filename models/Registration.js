const {Sequelize, DataTypes, ENUM} = require('sequelize')
const db = require('../config/db_config')

const Registration = db.define(
    'Registration', {
        regId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        eventId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        ticketId: {
            type: DataTypes.UUID,
            
            defaultValue: DataTypes.UUIDV4,
        },
        regDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        
    }
)

module.exports = Registration
return Registration