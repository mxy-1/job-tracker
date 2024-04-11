const mongoose = require("mongoose")
const Schema = mongoose.Schema

const applicationSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    job_title: {
        type: String
    },

}, {timestamps: true})

module.exports = mongoose.model("Application", applicationSchema)