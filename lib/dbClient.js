/* Dependencies */
const {Sequelize} = require("sequelize");
const config = require("./config")

const sequelize = new Sequelize(config["mysqlDbConnection"])

module.exports = sequelize