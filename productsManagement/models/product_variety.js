const { DataTypes, NOW} = require("sequelize")
const sequelize = require("../../lib/dbClient")
const Product = require("./product")

const Product_Variety = sequelize.define("Product_Variety", {
    product_id: {type: DataTypes.INTEGER, references: { model: Product, key: "id"}},
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    images: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2)
})


module.exports = Product_Variety