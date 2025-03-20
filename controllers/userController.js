//import the neede moduls
const jwt = require('jsonwebtoken') 
const bcrypt = require('bcryptjs')
const User= require('../models/User')
const {Op} = require('sequelize')
const {regValidation, loginValidation} = require('../validation/userValidation')

// Get all users
welcome = async (req,res)=>{
    const user = await User.findAll()
    return res.json(user)
}
// -------------------------Register----------------------------
//register
register = async (req, res)=>{
    const {username, password, email} = req.body
    const {error} = regValidation.validate(req.body)
    if (error){
        return res.status(404).json(error.details[0].message);
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const userExist = await User.findOne({
            where: {[Op.or]: [{ email}, { username }]}
        })
        if (userExist){
            return res.status(200).json({msg: 'User with these username or email  alredady exist'})
        }
        //credate users
        const createUser = await User.create({
            username,
            email,
            password:hashedPassword
        })
        // check if user exist
        if (!createUser){
            return res.status(401).json({msg: 'Failed to create a user'})
        }
        return res.status(201).json({msg: 'User created successfully'})

    } catch (error) {
        throw error

    }
}

// ------------------------login-------------------------------
login = async (req,res)=>{
    try {
        const {email,password} = req.body
        const {error} = loginValidation.validate(req.body)
        if(error){return res.json(error.details[0].message)}
    
        // check for correct details
        const userExist = await User.findOne({where: {email}})
        if(!userExist){
            return res.status(404).json({msg: "User not found on the database"})
        }

        // compare password
        const passwordCheck = await bcrypt.compare(password, userExist.password)
        if (!passwordCheck){
            return res.json({msg: 'incorrect password or username'})
        }

        const loginToken = jwt.sign(
            {id: userExist.userId, username: userExist.username, email: userExist.email, role: userExist.role}, 
            process.env.privateKey,
            {expiresIn: '1h'} 
        )
        return res.status(200).json({
            loginToken,
            firstname: userExist.firstName,
            id: userExist.email,
            username: userExist.username,
            role:userExist.role,

        })

        
    } catch (error) {
        throw error
        
    }
   
}


// ------------------ Update details ----------------------
updateDetails = async (req, res)=>{
    try {
        const userId = req.user
        const {firstName, lastName, role} = req.body
        const userExist = await User.findOne({where: userId})
        if (!userExist) {
            return res.status(404).json({msg: "User not found"})
        }

        const updateInfo = await User.update(
            {
                firstName: firstName,
                lastName: lastName,
                role: role        
            },
            {
                where: {userId}
            }
    )
        if (updateInfo){
            return res.status(201).json({msg: "User details updated successfully "})
        }
                
    } catch (error) {
        throw error
    }
}


// await User.update(
//     { lastName: 'Doe' },
//     {
//       where: {
//         lastName: null,
//       },
//     },
//   );


module.exports ={
    welcome,
    register,
    login,
    updateDetails
}