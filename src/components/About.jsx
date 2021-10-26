import React from "react";
import "./Navigation.css";
import "./About.css";

function About() {
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
          <div id="about-Page" data-name="about-Page" class="about-Page">
            <div class="about-frame-outer">
              <div id="about-frame" data-name="Frame 8" class="about-Frame">
                <div class="about-banner-frame-outer">
                  <div
                    id="about-banner-frame"
                    data-name="about-banner-frame"
                    alt="about-banner-frame"
                    class="about-banner-frame"
                  ></div>
                </div>

                <div class="about-outer">
                  <div id="about" data-name="about" class="about">
                    <div class="parent-container">
                      <div class="about-header">
                        <span class="about-header-title">About Us</span>
                      </div>
                    </div>

                    <div class="parent-container">
                      <div class="about-sub-header">
                        <span class="about-sub-header-title">
                          Hello, We're Palace's Pho
                        </span>
                      </div>
                    </div>

                    <div class="parent-container">
                        <div
                          id="about-line"
                          data-name="about-line"
                          alt="about-line"
                          class="about-line"
                        ></div>
                        <br/>
                        <br/>                      
                    </div>

                    <div class="parent-container">
                      <div class="about-left-child">
                        <span class="span-about">
                          <div class="content-title">Location</div>
                          Come see us at...<br/>1373 Maryland Ave E Saint Paul, MN
                          55106
                          <br/>
                        </span>
                      </div>

                      <div class="about-right-child">
                        <span class="span-about">
                          <div class="content-title">Call us at</div>
                          651-771-3535
                          <br />
                          <br />
                          <div class="content-title">Hours</div>
                          Open 11am - 7pm Sun-Th
                          <br />
                          11am - 8pm Fri-Sat
                          <br />
                          CLOSED MONDAYS
                        </span>{" "}
                      </div>

                      <div class="parent-container">
                  
                        <div class="location-map">
                          <div className="google-map-code">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11289.228466670627!2d-93.0425126!3d44.9780719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67cfc4be6852eebe!2sPalace&#39;s%20Pizza%20(Pho)!5e0!3m2!1sen!2sus!4v1633796280152!5m2!1sen!2sus"
                              width="400"
                              height="300"
                              frameBorder="0"
                              style={{ border: 0 }}
                              allowfullscreen=""
                              aria-hidden="false"
                              tabIndex="0"
                              title="Google Map"
                            ></iframe>
                          </div>
                        </div>
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

export default About;
