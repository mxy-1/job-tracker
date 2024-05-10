const express = require("express")
const { postApplication, getAllApplications, getApplicationById, deleteApplicationById, patchApplicationById } = require("../controllers/applications.controller")
const requireAuth = require("../middleware/requireAuth")

const router = express.Router()

// authenticates users before other routes
router.use(requireAuth)

router.get("/", getAllApplications)

router.post("/", postApplication)

router.get("/:id", getApplicationById)

router.patch("/:id", patchApplicationById)

router.delete("/:id", deleteApplicationById)


module.exports = router