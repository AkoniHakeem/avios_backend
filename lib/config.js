/* 
 * Manges the environments variable
*/

const config = {}
//  Dependencies
if(process.NODE_ENV==="development") config.connection = require("../credentials")


config.environments = {
    "development" : {
        "httpPort": 3001,
        "mysqlDb": config.connection.db
    },
    "staging" : {
        "httpPort": 3001,
    },
    "production" : { // We should set the https port always here
        "httpPort": process.env.PORT || 3001,
        "httpsPort": process.env.PORT || 8080,
    }
}

const envName = process.env.NODE_ENV? process.env.NODE_ENV.trim().toLocaleLowerCase() : "staging";
const environment = typeof(config.environments[envName]) == "object"? config.environments[envName] : config.environments.staging ;

module.exports = environment