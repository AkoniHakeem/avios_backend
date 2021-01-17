const express = require("express");
const productController = require("../productsManagement/controllers/poductsController");

const productsRouter = express.Router();

productsRouter.post("/save", productController.save)

productsRouter.put("/update", productController.update)

productsRouter.get("/show-products", productController.showProducts)

productsRouter.get("/show-products-varieties", productController.showProductsVarieties )

productsRouter.delete("/delete", productController.delete)

module.exports = productsRouter