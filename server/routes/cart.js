const route = require('express').Router();
const data = require('../index');

route.get('/getcart', (req, res) => {
    data.getCart().then((cart) => {
        res.send(cart);
    })
});

route.post('/addtocart', (req, res) => {
    data.addToCart(req.body.product);
    res.redirect('/myapi/cart');
});

module.exports = route;