const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json({ Products: allDaProducts });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.findOneSingleProduct = (req, res) => {
    Product.findById(req.params.id)
        .then((oneSingleProduct) => {
            res.json({ Product: oneSingleProduct });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((newlyCreatedProduct) => {
            res.json(newlyCreatedProduct);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedProduct) => {
            res.json({ Product: updatedProduct });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.findProductsByCandle = (req, res) => {
    Product.find({ isCandle: true })
        .then((products) => {
            res.json({ Products: products });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

module.exports.findProductsByApparel = (req, res) => {
    Product.find({ isApparel: true })
        .then((products) => {
            res.json({ Products: products });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};
