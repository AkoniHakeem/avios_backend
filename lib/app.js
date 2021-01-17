// This is the entry poin of the application
const bodyParser = require("body-parser");
const express = require("express");
const ping  = require("../routes/ping");
const app = express();
const productsRouter = require("../routes/productsRoutes");
const sequelize = require("./dbClient");

sequelize.authenticate().then(()=> {
  console.log("mysql db connection was successfull");
}).catch((error) => {
  console.log(`Error: the following error occurred - ${error}`);
})
sequelize.sync().then((seq) =>{
  
}).catch((err )=> console.log("Error: sync failed for the following reasons - ", err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
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

app.use(baseUrl + "/products", productsRouter);

module.exports = app;

