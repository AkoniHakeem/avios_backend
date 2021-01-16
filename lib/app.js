// This is the entry poin of the application
const bodyParser = require("body-parser");
const express = require("express");
const ping  = require("../routes/ping");
const app = express();
const productsRouter = require("../routes/productsRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

let baseUrl = "/api/v1";

app.use(baseUrl + "/ping", ping);

module.exports = app;

