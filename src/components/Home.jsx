import React from "react";
import "./Home.css";
import "./Navigation.css";

function Home() {
  return (
    <div className="home">
      <img class="home_pg_banner" src="home_pg_banner.png" alt="" />
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Rock+Salt"
      />
      <div class="palaces_logo">
        Palace's <br></br>Pho
      </div>
      <div class="home_page">
        
        <div class="container">
          <div class="row align-items-center my-3">
            <div class="col-lg-7">
              <body>
              <h1 class="font-weight-light">We're Palace's Pho</h1>
                <p>
                  Restaurant history... Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum iaculis eget nisl quis maximus.
                  Sed quis efficitur libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
              </body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
