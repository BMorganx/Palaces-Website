import React from "react";
import "./Cart.css";
import "./Navigation";

function Checkout() {
  
  return (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      <script src="./script.js" defer></script>
      <script src="https://www.paypal.com/sdk/js?AZXLeGb3GHv0jKCX8ipAJv_B1EPY0wWH-_e26tVmc9aveuNXNNFWlGZalGrRXVyWvvoBq0cKeWx7cDL5"></script>


    </head>

    <body>

      <h1>hello</h1>

      <div id="paypal-button-container"></div>

    </body>
  </html>
  );
} 
export default Checkout;
