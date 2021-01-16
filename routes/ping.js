const express = require("express")

const ping = express.Router()

ping.get("", (req, res) => {
    res.send("pong");
})

module.exports = ping;