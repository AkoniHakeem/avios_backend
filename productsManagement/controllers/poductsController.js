const Product = require("../models/product");
const Product_Variety = require("../models/product_variety")

const productController = {}

productController.save = async function (req, res)  {
    try {
        const receivedProduct = await Product.create(req.body.product);
        console.log(receivedProduct)
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error: --");
    }
}

productController.update = async function (req, res)  {
    try {
        const updated = Product.update(req.body.product, {where: req.body.product.id})
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}

productController.showProducts = async (req, res) => {
    try {
        const products = await Product.findAll({include: Product_Variety})
        console.log("products found - ", products);
        res.json(products);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}

productController.getProduct = async (req, res) => {
    try {
        const product_id = req.params.id;
        const products_varieties = await Product_Variety.findAll({
            where: {
                product_id: product_id
            }
        })
        res.json(products_varieties);
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
        const product_id = req.params.id;
        Product_Variety.destroy({
            where: {id: product_id}
        })
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}

productController.deleteProdVar = async function (req, res)  {
    try {
        const productVar_id = req.params.id;
        Product_Variety.destroy({
            where: {id: productVar_id}
        })
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error: --")
    }
}


module.exports = productController