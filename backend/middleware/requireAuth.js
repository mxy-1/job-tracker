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
        const {id} = jwt.verify(token, process.env.SECRET)

        console.log(id, "id")
        // add user key to req
        req.user = await User.findById(id).select("id")
        // console.log(req.user._id, "user id")
        req.user = id
        console.log(req.user, "request")
        next()

    } catch (error) {
        console.log(error)
        res.status(401).send({error: "Request is not authorized"})
    }
}

module.exports = requireAuth