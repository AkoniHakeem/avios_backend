const express = require("express");
const productController = require("../productsManagement/controllers/poductsController");

const productsRouter = express.Router();

productsRouter.post("/save", productController.save)

productsRouter.post("/update", productController.update)

productsRouter.post("/show-products", productController.showProducts)

productsRouter.post("/show-products-varieties", productController.showProductsVarieties )

productsRouter.post("/delete", productController.delete)

module.exports = productsRouter