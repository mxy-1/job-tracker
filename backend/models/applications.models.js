const mongoose = require("mongoose")
const Schema = mongoose.Schema

const applicationSchema = new Schema({
    company: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    hours: {
        type: Number,
    },
    salary: {
        type: Number
    },
    date: {
        type: Date
    },
    deadline: {
        type: Date
    },
    status: {
        type: String,
        required: true
    },
    comments: {
        type: String
    },
    interview: {
        type: Date
    }
    
}, {timestamps: true})

module.exports = mongoose.model("Application", applicationSchema)