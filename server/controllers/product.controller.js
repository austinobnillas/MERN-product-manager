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
    },
    getOneProduct: (req, res) => {
        Product.findById({ _id: req.params.id })
            .then(oneProduct => res.json(oneProduct))
            .catch(err => response.json(err));
    },
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => console.log(err));
    },
    deleteProduct: (req, res) => {
        Product.findByIdAndDelete({_id: req.params.id})
            .then(deletedProduct => res.json(deletedProduct))
            .catch(err => console.log(err));
    }

}