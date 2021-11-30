const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'palace_pizza_db'
});

app.post('/create', (req, res) => {
    const cart_id = req.body.cart_id;
    const menuName = req.body.menuName;
    const price = req.body.price;
    const quantity = req.body.quantity;

    db.query('INSERT INTO cart (dish_name, price, quantity) VALUES (?,?,?)',
    [menuName, price, quantity],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    }
    );
});

app.get("/dish", (req, res) => {
    db.query("SELECT * FROM cart", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete("/delete/:cart_id", (req, res) => {
    const cart_id = req.params.cart_id;
    db.query("DELETE FROM cart WHERE cart.cart_id = ?", cart_id, (err, result) => {
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

