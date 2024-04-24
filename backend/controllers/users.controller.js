const User = require("../models/user.model")
const bcrypt = require("bcrypt")

// login
const loginUser = async (req, res) => {
    res.json({ msg: "login user" })
}


// signup
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        res.status(201).send({user})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = { loginUser, signupUser }