import React from "react";
import "./Navigation.css";
import "./Home.css";

function Home() {
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
        <div class="Page-outer">
          <div id="Page" data-name="Page" class="Page">
            <div class="home-frame-outer">
              <div id="home-frame" data-name="Frame 8" class="home-Frame">

                <div class="Home-Banner-Frame-outer">
                  <div
                    id="home-banner-frame"
                    data-name="home-banner-frame"
                    alt="home-banner-frame"
                    class="home-banner-frame"
                  ></div>
                </div>
                <div class="home-outer">
                  <div
                    id="home"
                    data-name="home"
                    class="home"
                  >
                    <div class="parent-container">

                      <div class="home-left-child">
                        <span class="home-header">
                          <div class="home-title">
                            Palace's
                            <br />
                            Pho
                          </div>
                        </span>
                      </div>

                      <div class="home-right-child">
                        <span class="span-home">
                          <div class="body-title">We're Palace's Pho</div>
                          Restaurant history... Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Vestibulum iaculis eget
                          nisl quis maximus. Sed quis efficitur libero.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia curae.
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Home;
