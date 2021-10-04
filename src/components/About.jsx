import React from "react";
import "./About.css"
import "./Navigation.css"

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-4">
            <h2 class="font-weight-light">Location</h2>
            <p>
              1373 Maryland Ave E Saint Paul, MN 55106 
              Open
              11am - 7pm Sun-Th 11am - 8pm Fri-Sat CLOSED MONDAYS
            </p>
            <div class="row align-items-center my-5">
                <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="location_image.png"
              alt=""
            /></div>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About us</h1>
            <p>
              We’ve been in business since ... Restaurant history... Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis
              eget nisl quis maximus. Sed quis efficitur libero. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
