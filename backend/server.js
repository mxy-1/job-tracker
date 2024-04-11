require("dotenv").config()

const express = require("express")
const app = express()
const applications = require("./routes/applications")

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/applications", applications)

app.listen(process.env.PORT, () => {
    console.log("port listening on", process.env.PORT)
})