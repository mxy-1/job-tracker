const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const requireAuth = async (req, res, next) => {
    // verify authentication - contains web token
    const {authorization} = req.headers

    if (!authorization) {
        return res.status(401).send({error: "Authorization token required"})
    }

    const token = authorization.split(" ")[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        // add user key to req
        req.user = await User.findById(_id).select("_id")
        next()

    } catch (error) {
        console.log(error)
        res.status(401).send({error: "Request is not authorized"})
    }
}

module.exports = requireAuth