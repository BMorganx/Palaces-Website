import React from "react";
import "./Navigation.css";
import "./Order.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper";
SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

function Order() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
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
      </head>
      <body class="order-websiteBody">
        <div class="order-page-outer">
          <div id="order-page" data-name="order-page" class="order-page">
            <div class="order-frame-outer">
              <div
                id="order-frame"
                data-name="order-frame 8"
                class="order-frame"
              >
                <div class="order-Banner-frame-outer">
                  <div
                    id="order-banner-frame"
                    data-name="order-banner-frame"
                    alt="order-banner-frame"
                    class="order-banner-frame"
                  >
                    <div class="swiper-container">
                      <Swiper
                        effect={"coverflow"}
                        centeredSlides={true}
                        slidesPerView={3}
                        data-loop={true}
                        autoplay={{
                          delay: 1500,
                          speed: 1,
                          disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                          rotate: 1,
                          stretch: 0,
                          depth: 500,
                          modifier: 1,
                          slideShadows: false,
                        }}
                        pagination={true}
                        className="mySwiper"
                      >
                        <div class="swiper-wrapper">
                          <SwiperSlide>
                            <img
                              src={
                                require("../assets/Papaya-Salad.png").default
                              }
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Pad-Thai.png").default}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Pad-See-Ew.png").default}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Pad-Prik.png").default}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Bok-Choy.png").default}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Laab.png").default}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={
                                require("../assets/Chicken-Wings.png").default
                              }
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/King-Mussel.png").default}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={
                                require("../assets/Crispy-Jumbo-Shrimp.png")
                                  .default
                              }
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Pad-Pak.png").default}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={
                                require("../assets/Sesame-Chicken.png").default
                              }
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Kow-Pad.png").default}
                              alt=""
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>
                    </div>
                  </div>
                </div>

                <div class="order-body-outer">
                  <div
                    id="order-body"
                    data-name="order-body"
                    class="order-body"
                  >
                    <div class="parent-container">                    
                      <div class="order-left-child">
                      <div class="order-title">Order Menu</div>
                        <a href="#appetizers">Appetizers</a>
                        <br />
                        <a href="#curry">Thai Curry Dishes</a>
                        <br />
                        <a href="#seafood">Thai Seafood Dishes</a>
                        <br />
                        <a href="#traditional">Traditional Thai Cousine</a>
                        <br />
                        <a href="#pho">Pho & Soup</a>
                        <br />
                        <a href="#salads">Salads</a>
                        <br />
                        <a href="#other">Other Entrees</a>
                        <br />
                        <a href="#combos">Rice & Combinations</a>
                      </div>

                      <div class="order-right-child">
                        <div class="order-scrollable-content">
                          <br />
                          <div class="order-section" id="appetizers">                            
                            Appetizers
                            <div class="Line-order-outer">
                              <div
                                id="Line-order"
                                data-name="Line-order"
                                alt="Line-order"
                                class="Line-order"
                              ></div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Cream Cheese Wontons - $4.95
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Cream Cheese Wontons - $4.95
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                          </div>

                          <div class="order-section" id="curry">
                          Thai Curry Dishes
                            <div class="Line-order-outer">
                              <div
                                id="Line-order"
                                data-name="Line-order"
                                alt="Line-order"
                                class="Line-order"
                              ></div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Pad Pak Curry (Regular) - $11.50
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Cream Cheese Wontons - $4.95
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                          </div> 

                          <div class="order-section" id="seafood">
                          Thai Seafood Dishes
                            <div class="Line-order-outer">
                              <div
                                id="Line-order"
                                data-name="Line-order"
                                alt="Line-order"
                                class="Line-order"
                              ></div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Seafood Combination - $14.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                King Mussel - $14.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Royal Ginger Jumbo Shrimp - $13.95
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Crispy Jumbo Shrimp - $13.95
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Princess Jumbo Shrimp - $13.95
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                          </div> 

                          <div class="order-section" id="traditional">
                          Traditional Thai Cousine
                            <div class="Line-order-outer">
                              <div
                                id="Line-order"
                                data-name="Line-order"
                                alt="Line-order"
                                class="Line-order"
                              ></div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Kow Pad - $10.50
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                              Kow Pad Prik - $10.50
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Pad Thai - $10.75
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Pad See-Ew - $10.75
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Pad Prik - $10.15
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Pad Pak - $10.15
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Pad Normai - $10.15
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Pad Cashew Nut - $10.15
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                          </div> 


                          <div class="order-section" id="pho">
                          Pho & Soup
                            <div class="Line-order-outer">
                              <div
                                id="Line-order"
                                data-name="Line-order"
                                alt="Line-order"
                                class="Line-order"
                              ></div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Palace's Special Pho - $11.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                              Seafood Pho - $13.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Regular Pho - $10.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                House Special Soup (With Noodles) - $11.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                              House Special Soup (No Noodles) - $10.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>                            
                          </div> 


                          <div class="order-section" id="salads">
                          Salad
                            <div class="Line-order-outer">
                              <div
                                id="Line-order"
                                data-name="Line-order"
                                alt="Line-order"
                                class="Line-order"
                              ></div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Papaya Salad (Thai Style) - $8.99
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                              Cucumber Papaya Salad - $8.99
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Seafood Papaya Salad - $10.99
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                               Beef Laab - $14.99
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                              Beef Raw Laab - $14.99
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div> 
                            <div class="order-item-right">
                              <div class="dish-order">
                               Seafood Laab - $15.99
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>                           
                          </div> 



                          <div class="order-section" id="other">
                          Other Entrees
                            <div class="Line-order-outer">
                              <div
                                id="Line-order"
                                data-name="Line-order"
                                alt="Line-order"
                                class="Line-order"
                              ></div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                               Sesame Chicken - $10.15
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                             Pad Bok Choy - $10.15
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>                                               
                          </div> 

                          <div class="order-section" id="combos">
                          Rice & Combinations
                            <div class="Line-order-outer">
                              <div
                                id="Line-order"
                                data-name="Line-order"
                                alt="Line-order"
                                class="Line-order"
                              ></div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                               White Rice - $5.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                             Sticky Rice - $10.15
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
                            </div>   
                            <div class="order-item-left">
                              <div class="dish-order">
                               Sausage Served With Sticky Rice - $8.00<br/>w/o rice $5.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                             Pork Belly Served With Sticky Rice - $10.00<br/>w/o rice $7.00
                                <br />
                                <button class="order-button"><span>Add to Order</span> </button>                              </div>
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
        </div>
      </body>
    </html>
  );
}

export default Order;
