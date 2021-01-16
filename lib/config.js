/* 
 * Manges the environments variable
*/

//  Dependencies
const config = {}

config.environments = {
    "development" : {
        "httpPort": 3001,
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