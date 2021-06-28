const express = require("express")
const { Server } = require("http")
const path = require("path")
const port = process.env.PORT || 3000

console.log(process.env.PORT)

app = express()

app.use(express.static(path.join(__dirname, "./public")))

app.listen(port, () => console.log("Server started at http://localhost:" + port))