const express = require("express")
const app = express()
const path = require("path")

app.use(express.static('static'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/data.json")
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})