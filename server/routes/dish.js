const route = require('express').Router();
const data = require('../index');

route.get('/getdish', (req, res) => {
    data.getCart().then((menu_item) => {
        res.send(menu_item);
    })
});

module.exports = route;