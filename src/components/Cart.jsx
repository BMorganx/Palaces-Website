import React from "react";
import "./Navigation.css";
import "./Cart.css";
<<<<<<< Updated upstream

function Cart() {
=======
import {useState, useEffect} from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import PayPal from "./Paypal";


function Cart() {
    const [checkout, setCheckOut] = useState(false);
  /*const [menuName, setMenuName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [cart_id, setCartId] = useState(0);*/
    const [menuList, setMenuList] = useState([]);
    

    useEffect(() => {
      getDish();
        }, []);

    const getDish = async () => {
    const response = await Axios.get("http://localhost:3001/dish");
      setMenuList(response.data);
    };

    const deleteDish = (cart_id) => {
      Axios.delete(`http://localhost:3001/delete/${cart_id}`).then((response) => {
        setMenuList(
          menuList.filter((val) => {
            return val.cart_id != cart_id;
          })
        );
      });
    };

    

    /*const getTotal = async () => {

    }*/

>>>>>>> Stashed changes
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
        <script src="https://www.paypal.com/sdk/js?client-id=AZXLeGb3GHv0jKCX8ipAJv_B1EPY0wWH-_e26tVmc9aveuNXNNFWlGZalGrRXVyWvvoBq0cKeWx7cDL5"></script>
        <script src="./script.js" defer></script>



        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=5"
        />

        <title>Cart</title>
        <meta name="description" content="cart Description" />
        <meta property="og:title" content="cart" />
        <meta property="og:description" content="cart Description" />
        <meta name="generator" content="Quest" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rock+Salt:400"
        />
        <link rel="stylesheet" href="index.css" />

        <script src="index.js"></script>
      </head>
      <body class="websiteBody">
        <div class="cart-Page-outer">
          <div id="cart-Page" data-name="cart-Page" class="cart-Page">
            <div class="cart-outer">
              <div id="cart-frame" data-name="cart-frame 8" class="cart-frame">

                <div class="Cart-Banner-Frame-outer">
                  <div
                    id="Cart-Banner-Frame"
                    data-name="Cart-Banner-Frame"
                    alt="Cart-Banner-Frame"
                    class="Cart-Banner-Frame"
                  ></div>
                </div>

                <div class="parent-container">
                      <div class="cart-title-outer">
                        <span class="cart-title">Cart</span>
                      </div>
                    </div>
                

                <div class="cart-body-Outer">
                  <div id="cart-body" data-name="cart-body" class="cart-body">
                    <div class="parent-container">
                      <div class="cart-left-child">
                        <span class="cart-span-menu-items">
                          <div class="remove-title">Remove</div>
                          <div class="text-in-span">xbutton xbutton xbutton xbutton</div>
                        </span>
                      </div>

                      <div class="cart-middle-left-child">
                        <span class="cart-span-menu-items">
                          <div class="remove-title">Item</div>
                          <div class="text-in-span">Seafood Papaya Salad<br/>Wings<br/>Rice<br/>Papaya</div>
                        </span>
                      </div>

                      <div class="cart-middle-right-child">
                        <span class="cart-span-menu-items">
                          <div class="remove-title">Price</div>
                          <div class="text-in-span">$1.50 $2.50 $3.50 $4.50</div>
                        </span>
                      </div>

                      <div class="cart-right-child">
                        <span class="cart-span-menu-items">
                          <div class="remove-title">Qty</div>
                          <div class="text-in-span">box box box box</div>
                        </span>
                      </div>
                    </div>

                    <div class="checkout-button-outer">
                      <div class="checkout-button">Checkout</div>
                    </div>
                  </div>
<<<<<<< Updated upstream
                </div>
=======
                </div>*/}
                <table className="table">
                          <tr>
                            <th>Remove</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Qty</th>
                          </tr>
                    {menuList.map((val, key) => {

                      /*var valtotal = menuList.reduce((total, val)=>total+(val.price*val.quantity),0).toFixed(2);*/


                      return (
                        
                          <tr>
                            <th><button class="button2" onClick={() => {deleteDish(val.cart_id);}} >Delete</button></th>
                            <th>{val.dish_name}</th>
                            <th>${val.price.toFixed(2)}</th>
                            <th><input type="number" id="quantity" min="1" defaultValue={val.quantity}></input></th>
                          </tr>
                          
                          
                      );
                      })}

                    </table>
                    <table class="cart-total">
                      <tr>
                        <th><div class="cart-total">Total: ${menuList.reduce((total, val)=>total+(val.price*val.quantity),0).toFixed(2)}</div></th>
                      </tr>
                      <tr>
                        <th>{/*<div class="checkout-button-outer">*/}                            
                          {/*</div>*/}</th>
                      </tr>
                      {/*<script>
                    var valtotal = menuList.reduce((total, val)=>total+(val.price*val.quantity),0).toFixed(2);
                      </script>*/}
                    </table>
                    <div className="Paypal">
                      {checkout ? (
                        <PayPal />
                      ) : (
                      

                    <button class="checkout" onClick= {() => {
                        setCheckOut(true);
                        }}
                        >
                          Checkout
                        </button>
                      )}
                    </div>
>>>>>>> Stashed changes
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Cart;

// function Checkout(){
//   const express = require('express');
//   const ejs = require('ejs');
//   paypal = require('paypal-rest-sdk');

//   const app = express();

//   app.set('view engine', 'ejs');
//   app.get('/', (req, res) => res.sender('index'));
//   app.listen(3000, () => console.log('Server Started'));

// }