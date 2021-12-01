import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import {useState, useEffect} from "react";
import "./Navigation.css";
import "./Checkout.css";

export default function Checkout() {


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
    
            <title>Home</title>
            <meta name="description" content="Catering Description" />
            <meta property="og:title" content="Catering" />
            <meta property="og:description" content="Catering Description" />
            <meta name="generator" content="Quest" />
    
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Rock+Salt:400"
            />
            <link rel="stylesheet" href="index.css" />
    
            <script src="index.js"></script>
          </head>
          <body class="websiteBody">
            <div className="paypal"><PayPalButton
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: "USD",
                    value: "0.01"
                  }
                }],

              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function(details) {
                alert("Transaction completed by " + details.payer.name.given_name);
                    return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                });
              });
            }}
          /></div>
         
          </body>
        </html>
      );

    
}


