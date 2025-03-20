const express = require('express')
const {Sequelize} = require('sequelize')
const db = require('./config/db_config')


const User = require('./models/User')
const Event = require('./models/Events')
const Ticket = require('./models/Tickets')
const Registration = require('./models/Registration')
const Payment = require('./models/Payment')

// import routes
const  userRoute = require('./routes/userRoutes')


const port = process.env.PORT||5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// load the routes
app.use('/event-app', userRoute)












app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})