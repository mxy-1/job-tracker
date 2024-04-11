require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const applications = require("./routes/applications")

// app.get("/", (req, res) => {
//     res.send("hello world")
// })

app.use(express.json()) // parses any data

app.use("/api/applications", applications)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected")
        // start listening to db once connection established
        app.listen(process.env.PORT, () => {
            console.log("port listening on", process.env.PORT)
        })
    })
    .catch((error) => console.log(error))

