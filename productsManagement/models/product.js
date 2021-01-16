const validator = require("../../lib/modelValidations")

const Product = function(p = {}) {
    validator.validate(p.product_name, ["required"])
    this.product_name = p.name
    this.product_description = p.description
    this.date_uploaded = Date.now()
    this.date_edited = Date.now()
}

module.exports = Product