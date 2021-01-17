/* 
 * Manges the environments variable
*/

const config = {
    connection: ""
}
//  Dependencies
if(process.env.NODE_ENV.trim() === "development") {
    config.connection = require("../credentials").db
}


config.environments = {
    "development" : {
        "httpPort": 3001,
        "mysqlDbConnection": config.connection
    },
    "staging" : {
        "httpPort": 3001,
        "mysqlDbConnection" : ""
    },
    "production" : { // We should set the https port always here
        "httpPort": process.env.PORT || 3001,
        "httpsPort": process.env.PORT || 8080,
        "mysqlDbConnection": process.env.DB_CONNECTION
    }
}

const envName = process.env.NODE_ENV.trim()? process.env.NODE_ENV.trim().toLocaleLowerCase() : "staging";
const environment = typeof(config.environments[envName]) == "object"? config.environments[envName] : config.environments.staging ;

module.exports = environment