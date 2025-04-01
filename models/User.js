const {Sequelize, DataTypes, ENUM, hasMany} = require('sequelize')
const db = require('../config/db_config')
const Registration = require('./Registration')
const { FOREIGNKEYS } = require('sequelize/lib/query-types')

const User = db.define(
    'User', {
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
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
            unique: true
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('Admin', 'User', 'Guest'), 
            defaultValue: 'Admin'
        },
    }
)

// database associations
User.hasMany(Registration, {foreignKeys: 'regId'})
Registration.belongsTo(User) 


module.exports = User
return User