const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
const MenuRoute = require('./routes/Dish');
app.use('/myapi/Dish', MenuRoute);
const CartRoute = require('./routes/cart');
app.use('/myapi/cart', CartRoute);
app.use('/',express.static(__dirname+"/public_static"));
app.listen(3001, function () {
    console.log("Sever started on http://localhost:3001");
});