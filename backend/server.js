require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
const applications = require("./routes/applications")
const users = require("./routes/user")

// app.get("/", (req, res) => {
//     res.send("hello world")
// })

app.use(cors())
app.use(express.json()) // parses any data

//routes
app.use("/api/applications", applications)
app.use("/api/user", users)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected")
        // start listening to db once connection established
        app.listen(process.env.PORT, () => {
            console.log("port listening on", process.env.PORT)
        })
    })
    .catch((error) => console.log(error))

