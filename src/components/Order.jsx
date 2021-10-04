import React from "react";
import "./Navigation.css";
import "./Order.css";

function Order() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Rock+Salt"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="shortcut icon" type="image/png" href="img/favicon.png" />

        <title>CSS Grids Gallery</title>
      </head>
      <div class="grid-container">
        <div class="item1">
          1
          <img src="Papaya Salad_JPG 1.png" alt=""/>
          <p>(-) Add To Cart (+)</p>
        </div>
        <div class="item2">
          2
          <img src="Pad Thai_JPG 1.png" alt=""/>
          <p>(-) Add To Cart (+)</p>
        </div>
        <div class="item3">
          3
          <img src="Pad See Ew_JPG 1.png" alt=""/>
          <p>(-) Add To Cart (+)</p>
        </div>
        <div class="item4">
          4
          <img src="Pad Prik_JPG 1.png" alt="" />
          <p>(-) Add To Cart (+)</p>
        </div>
        <div class="item5">
          5
          <img src="Pad Pak Curry_JPG 1.png" alt=""/>
          <p>(-) Add To Cart (+)</p>
        </div>
        <div class="item6">
          6
          <img src="Lab_JPG 1.png" alt=""/>
          <p>(-) Add To Cart (+)</p>
        </div>
      </div>
    </html>
  );
}

export default Order;
