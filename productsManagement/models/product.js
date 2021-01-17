const { DataTypes, NOW} = require("sequelize")
const sequelize = require("../../lib/dbClient")
const Product_Variety = require("./product_variety")
const Product = sequelize.define(
    "Product",
    {
        product_name: DataTypes.STRING,
        product_description: DataTypes.STRING,
        date_uploaded: {type: DataTypes.DATE, defaultValue: NOW},
        date_edited: {type: DataTypes.DATE, defaultValue: NOW}
    }
)
Product.hasMany(Product_Variety, {
    foreignKey: "product_id"
})
Product_Variety.belongsTo(Product)

module.exports = Product