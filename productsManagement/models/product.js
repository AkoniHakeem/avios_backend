
// const mongoose = require("mongoose");

const validator = require("../../lib/modelValidations")

// const productSchma = new mongoose.Schema({
//     name: String,
//     price: String,
//     description: String,
//     detailedDescription: String,
//     tags: String, // Split tags with semi colon
//     imageLocation: String,
//     categoryId: String,
//     createdAt: {type: Date, default: Date.now()},
//     updatedAt: {type: Date, default: Date.now()},
//     createdBy: String,
//     updatedBy: String
// });

const Product = function(p = {}) {
    validator.validate(p.name, ["required"])
    this.name = p.name
    this.price = p.price
    this.description = p.description
    this.detailedDescription = p.detailedDescription
    this.tags = p.tags // this is an array
    this.imageLocation = p.imageLocation
    this.categoryId = p.categoryId
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
    this.createdBy = p.createdBy
    this.updatedBy = p.updatedBy
}

module.exports = Product