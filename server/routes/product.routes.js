const ProductController = require('../controllers/products.controller');

module.exports = app => {
    // Product Controller
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneSingleProduct);
    app.post('/api/products', ProductController.createNewProduct);
    app.patch('/api/products/:id', ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);
    app.get('/api/products/search/candle/:isCandle', ProductController.findProductsByCandle);
    app.get('/api/products/search/apparel/:isApparel', ProductController.findProductsByApparel);
};
