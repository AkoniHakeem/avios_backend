const validator = require("../../lib/modelValidations")

const Product_Variety = function(p={}) {
    this.size = "";
    this.color = "",
    this.quantity = 0,
    this.images = [],
    this.price = 0
}

module.exports = Product_Variety