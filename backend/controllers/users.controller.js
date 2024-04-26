const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, {expiresIn: "7d"})
}

// login
const loginUser = async (req, res) => {
    res.json({ msg: "login user" })
}


// signup
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        // create token
        const token = createToken(user._id)
         
        res.status(201).send({email, token})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = { loginUser, signupUser }