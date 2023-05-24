const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Must have more than 3 characters."]
    },
    imgUrl: {
        type: String,
        required: [true, "Picture is required"],
        minlength: [3, "Must have more than 3 characters."]
    },
    Description: {
        type: String,
        required: [true, "Description is required"],
    },

    isCandle: {
        type: Boolean
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductsSchema);
module.exports = Product;