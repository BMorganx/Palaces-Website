import React from "react";
import "./Navigation.css";
import "./Cart.css";
import {useState, useEffect} from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";

function Cart() {

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

<<<<<<< Updated upstream
    const getTotal = async () => {

    }

=======
>>>>>>> Stashed changes
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>

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
                
                <table className="table">
                          <tr>
                            <th>Remove</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Qty</th>
                          </tr>
                    {menuList.map((val, key) => {

                      return (
                        
                          <tr>
                            <th><button class="button2" onClick={() => {deleteDish(val.cart_id);}} >Delete</button></th>
                            <th>{val.dish_name}</th>
                            <th>${val.price.toFixed(2)}</th>
                            <th><input type="number" id="quantity" min="1" defaultValue={val.quantity}></input></th>
                          </tr>
                        
                      );
                      })}
<<<<<<< Updated upstream
=======

                    </table>
                    <table class="cart-total">
                      <tr>
                        <th><div class="cart-total">Total: ${menuList.reduce((total, val)=>total+(val.price*val.quantity),0).toFixed(2)}</div></th>
                      </tr>
                      <tr>
                        <th>
                          <button class="checkout" onClick= {() => {window.location='Checkout';}}>Checkout</button>
                        </th>
                      </tr>
>>>>>>> Stashed changes
                    </table>

                    {/*<div class="checkout-button-outer">*/}
                      <button /*class="checkout-button"*/ onClick= {() => {window.location='Checkout';}}>Order</button>
                    {/*</div>*/}

              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Cart;
