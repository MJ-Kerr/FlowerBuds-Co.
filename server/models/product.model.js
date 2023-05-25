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
    Price: {
        type: String,
        required: [true, "Price is required"]
    },
    Quantity: {
        type: String,
        required: [true, "Starting quantity is required"]
    },
    isCandle: {
        type: Boolean,
        required: [true, "Please check if this is a candle"]
    },
    isApparel: {
        type: Boolean,
        required: [true, "Please check if this is a piece of apparel"]
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductsSchema);
module.exports = Product;
