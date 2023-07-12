const Product = require("../models/product.model");

module.exports = {
    getAllProducts: (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => response.json(err));
    },
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => response.json(err));
    }
}