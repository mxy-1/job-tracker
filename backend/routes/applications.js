const express = require("express")
const Application = require("../models/applications.models")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("GET applications")
})
router.post("/", async (req, res) => {
    const { company, job_title } = req.body

    try {
        const application = await Application.create({ company, job_title })
        res.status(200).send({application})
        console.log("added")

    } catch (error) {
        res.status(400).send({ error: error.message })
        console.log("error", error)

    }
})

router.get("/:id", (req, res) => {
    res.send("GET application by id")
})

router.patch("/:id", (req, res) => {
    res.send("PATCH application by id")
})

router.delete("/:id", (req, res) => {
    res.send("DELETE application by id")
})


module.exports = router