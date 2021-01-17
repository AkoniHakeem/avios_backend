const Product = require("../models/product");
const Product_Variety = require("../models/product_variety")

const productController = {}

productController.save = async function (req, res)  {
    try {
        const receivedProduct = await Product_Variety.create({
            product_id: 1,
            size: 40,
            color: "black",
            quantity: 10,
            image: "",
            price: 50.00
        })
        //db.save(receivedProduct);
        console.log(receivedProduct)
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}

productController.update = async function (req, res)  {
    try {
        ///const prod
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}

productController.showProducts = async (req, res) => {
    try {

        const products = await Product.findAll()
        console.log("products found - ", products);
        res.json(products);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}

productController.showProductsVarieties = async function (req, res)  {
    try {
        const productVarieties = []
        res.json(productVarieties);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}

productController.delete = async function (req, res)  {
    try {
        ///const prod
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}


module.exports = productController