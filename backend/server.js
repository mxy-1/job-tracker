const express = require("express")
const app = express()
const port = 3000
const applications = require("./routes/applications")

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/applications", applications)

// app.route("/api/applications")
//     .get((req, res) => {
//         res.send("GET applications")
//     })
//     .post((req, res) => {
//         res.send("POST applications")
//     })

// app.route("/api/applications/:id")
//     .get((req, res) => {
//         res.send("GET application by id")
//     })
//     .put((req, res) => {
//         res.send("PUT application by id")
//     })
//     .delete((req, res) => {
//         res.send("DELETE application by id")
//     })

app.listen(port, () => {
    console.log("port listening on", port)
})