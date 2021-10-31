const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());
/*const Sequelize = require('sequelize');
const db = new Sequelize('palace_pizza_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 1000
    }
});

const Menu_Item = db.define('menu_item', {
    menu_item_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    menu_item_name: Sequelize.CHAR,
    item_description: Sequelize.TEXT,
    price: Sequelize.FLOAT,
    combination: Sequelize.FLOAT,
    xl: Sequelize.FLOAT,
    addition: Sequelize.CHAR,
    addition_price: Sequelize.FLOAT,
    image_name: Sequelize.TEXT,
    category: Sequelize.CHAR,
    cater_name: Sequelize.CHAR,
    size_small: Sequelize.INTEGER,
    size_large: Sequelize.INTEGER
});

db.sync({});

const CartDish = db.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dish_name: Sequelize.CHAR,
    price: Sequelize.FLOAT,
    quanity: Sequelize.INTEGER,
    amount: Sequelize.INTEGER
});

db.sync({});

function getMenu_Items () { return Menu_Item.findAll(); }

function addToCart (menu_Item) {
    CartDish.findById(menu_Item.menu_item_id).then(cartItem => {
        cartItem.increment('quantity', {by: menu_Item.quanity});
        cartItem.increment('amount', {by: menu_Item.amount});
        return cartItem;
    })
    return CartDish.create(
        {
            cart_id: menu_Item.menu_item_id,
            dish_name: menu_Item.name,
            price: menu_Item.price,
            quanity: menu_Item.quanity,
            amount: menu_Item.amount
        }
    );
}

function getCart() {
    if (CartProduct.findAll())
        return CartProduct.findAll();
    else
        return 0;
}

module.exports = {
    getMenu_Items,
    addToCart,
    getCart
};*/

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'palace_pizza_db'
});

app.post('/create', (req, res) => {
    const menuName = req.body.menuName;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const cart_id = 1;
    
    /*db.query('SELECT * from cart WHERE dish_name = ?', 
    [menuName], 
    (err, result) => {
        if (err) {
            console.log(err); 
    } else {
        res.send(result);
    }
    })
        /*db.query('UPDATE cart SET quantity = ? WHERE dish_name = ?' ,
        [quantity + 1, menuName],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })*/


    db.query('INSERT INTO cart (cart_id, dish_name, price, quantity) VALUES (?,?,?,?) WHERE cart_id =',
    [cart_id, menuName, price, 1], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    }
    );
    
})

app.get("/dish", (req, res) => {
    db.query("SELECT * FROM cart", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, ()=> {
    console.log("Server Listened on port 3001")
})

