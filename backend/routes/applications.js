const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("GET applications")
})
router.post("/",(req, res) => {
    res.send("POST applications")
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