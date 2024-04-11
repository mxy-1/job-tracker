const express = require("express")
const { postApplication, getAllApplications, getApplicationById, deleteApplicationById, patchApplicationById } = require("../controllers/applications.controller")
const router = express.Router()

router.get("/", getAllApplications)

router.post("/", postApplication)

router.get("/:id", getApplicationById)

router.patch("/:id", patchApplicationById)

router.delete("/:id", deleteApplicationById)


module.exports = router