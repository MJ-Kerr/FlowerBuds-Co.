const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, "Product is required"],
        minlength: [3, "Cannot be left blank, must have more than 3 characters.🤪"]
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductsSchema);

module.exports = Product;