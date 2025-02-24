const express = require('express')
const {Sequelize} = require('sequelize')
const db = require('./config/db_config')


const User = require('./models/User')
const Event = require('./models/Events')
const Ticket = require('./models/Tickets')
const Registration = require('./models/Registration')
const Payment = require('./models/Payment')


const port = process.env.PORT||5000
const app = express()










app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})