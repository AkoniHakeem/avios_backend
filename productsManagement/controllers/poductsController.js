const Product = require("../models/product");

const productController = {}
productController.create = (req, res) => {
    const product = new Product({
        name: "foot wear 2",
        price: "N30",
        description: "foot wear for adult and young ones",
        detailedDescription: "foot wear for adult and young ones",
        tags: ["shoes"],
        imageLocation: "",
        categoryId: "",
        createdBy: "",
        updatedBy: ""
    });
}

productController.getProducts = async (req, res) => {

}

productController.getProduct = async function (req, res)  {

}
``
module.exports = productController