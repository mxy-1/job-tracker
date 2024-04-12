const Application = require("../models/applications.models")

const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find({})
        res.status(200).send({ applications })
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const postApplication = async (req, res) => {
    try {
        const application = await Application.create({...req.body})
        res.status(201).send({ application })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }

}

const getApplicationById = async (req, res) => {
    try {
        const { id } = req.params
        const application = await Application.findById(id)
        res.status(200).send({ application })
    } catch (error) {
        res.status(404).send({ error: "Application not found" })
    }
}

const patchApplicationById = async (req, res) => {
    try {
        const { id } = req.params

        await Application.findByIdAndUpdate(id, {...req.body})
        res.sendStatus(201)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

const deleteApplicationById = async (req, res) => {
    try {
        const { id } = req.params
        await Application.findByIdAndDelete(id)
        res.sendStatus(204)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

module.exports = { postApplication, getAllApplications, getApplicationById, deleteApplicationById, patchApplicationById }