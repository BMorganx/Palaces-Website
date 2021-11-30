import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./Navigation.css";
import "./Order.css";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
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

  const [cart_id, setCartId] = useState(0);
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [menuList, setMenuList] = useState([]);

  const displayInfo = () => {
    console.log(menuName + ' ' + price);
  }

  const addCream = () => {

    Axios.post("http://localhost:3001/create", {
      menuName: "Cream Cheese Wontons",
      price: 4.95,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Cream Cheese Wontons",
          price: 4.95,
          quantiy: 1,
        },
      ]);
    });
  };

  const addChicken = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Chicken Wings",
      price: 8.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Chicken Wings",
          price: 8.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadPakCurry = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad Pak Curry",
      price: 11.50,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad Pak Curry",
          price: 11.50,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadPed = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad Ped",
      price: 11.50,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad Ped",
          price: 11.50,
          quantiy: 1,
        },
      ]);
    });
  };

  const addSeaFoodComb = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Seafood Combination",
      price: 14.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Seafood Combination",
          price: 14.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addKingMussel = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "King Mussel",
      price: 14.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "King Mussel",
          price: 14.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addRoyalGingerJumbo = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Royal Ginger Jumbo Shrimp",
      price: 13.95,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Royal Ginger Jumbo Shrimp",
          price: 13.95,
          quantiy: 1,
        },
      ]);
    });
  };

  const addCrispyJumbo = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Crispy Jumbo Shrimp",
      price: 13.95,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Crispy Jumbo Shrimp",
          price: 13.95,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPrincess = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Princess Jumbo Shrimp",
      price: 13.95,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Princess Jumbo Shrimp",
          price: 13.95,
          quantiy: 1,
        },
      ]);
    });
  };

  const addKowPad = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Kow Pad",
      price: 10.50,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Kow Pad",
          price: 10.50,
          quantiy: 1,
        },
      ]);
    });
  };

  const addKowPadPrik = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Kow Pad Prik",
      price: 10.50,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Kow Pad Prik",
          price: 10.50,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadThai = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad Thai",
      price: 10.75,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad Thai",
          price: 10.75,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadSeeEw = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad See-Ew",
      price: 10.75,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad See-Ew",
          price: 10.75,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadPrik = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad Prik",
      price: 10.15,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad Prik",
          price: 10.15,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadPak = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad Pak",
      price: 10.15,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad Pak",
          price: 10.15,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadNormai = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad Normai",
      price: 10.15,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad Normai",
          price: 10.15,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadCashew = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad Cashew Nut",
      price: 10.15,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad Cashew Nut",
          price: 10.15,
          quantiy: 1,
        },
      ]);
    });
  };

  const addSpecialPho = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Palace's Special Pho",
      price: 11.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Palace's Special Pho",
          price: 11.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addSeafoodPho = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Seafood Pho",
      price: 13.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Seafood Pho",
          price: 13.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addRegularPho = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Regular Pho",
      price: 10.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Regular Pho",
          price: 10.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addHouseSpecialSoupWithNoodles = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "House Special Soup (With Noodles)",
      price: 11.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "House Special Soup (With Noodles)",
          price: 11.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addHouseSpecialSoupNoNoodles = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "House Special Soup (No Noodles)",
      price: 10.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "House Special Soup (No Noodles)",
          price: 10.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPapayaSalad = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Papaya Salad (Thai Style)",
      price: 8.99,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Papaya Salad (Thai Style)",
          price: 8.99,
          quantiy: 1,
        },
      ]);
    });
  };

  const addCucumberPapayaSalad = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Cucumber Papaya Salad",
      price: 8.99,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Cucumber Papaya Salad",
          price: 8.99,
          quantiy: 1,
        },
      ]);
    });
  };

  const addSeafoodPapayaSalad = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Seafood Papaya Salad",
      price: 10.99,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Seafood Papaya Salad",
          price: 10.99,
          quantiy: 1,
        },
      ]);
    });
  };

  const addBeefLaab = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Beef Laab",
      price: 14.99,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Beef Laab",
          price: 14.99,
          quantiy: 1,
        },
      ]);
    });
  };

  const addBeefRawLaab = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Beef Raw Laab",
      price: 14.99,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Beef Raw Laab",
          price: 14.99,
          quantiy: 1,
        },
      ]);
    });
  };

  const addSeafoodLaab = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Seafood Laab",
      price: 15.99,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Seafood Laab",
          price: 15.99,
          quantiy: 1,
        },
      ]);
    });
  };

  const addSesameChicken = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Sesame Chicken",
      price: 10.15,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Sesame Chicken",
          price: 10.15,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPadBokChoy = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pad Bok Choy",
      price: 10.15,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pad Bok Choy",
          price: 10.15,
          quantiy: 1,
        },
      ]);
    });
  };

  const addWhiteRice = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "White Rice",
      price: 5.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "White Rice",
          price: 5.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addStickyRice = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Sticky Rice",
      price: 5.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Sticky Rice",
          price: 5.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addSausage = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Sausage Served With Sticky Rice",
      price: 8.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Sausage Served With Sticky Rice",
          price: 8.00,
          quantiy: 1,
        },
      ]);
    });
  };

  const addPorkBelly = () => {
    Axios.post("http://localhost:3001/create", {
      menuName: "Pork Belly Served With Sticky Rice",
      price: 10.00,
      quantity: 1,
    }).then(() => {
      setMenuList([
        ...menuList,
        {
          menuName: "Pork Belly Served With Sticky Rice",
          price: 10.00,
          quantiy: 1,
        },
      ]);
    });
  };

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
                            <h1>Papaya Salad</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Pad-Thai.png").default}
                              alt=""
                            />
                            <h1>Pad Thai</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Pad-See-Ew.png").default}
                              alt=""
                            />
                            <h1>Pad See-Ew</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Pad-Prik.png").default}
                              alt=""
                            />
                            <h1>Pad-Prik</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Bok-Choy.png").default}
                              alt=""
                            />
                            <h1>Pad Bok Choy</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Laab.png").default}
                              alt=""
                            />
                            <h1>Beef Lab</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={
                                require("../assets/Chicken-Wings.png").default
                              }
                              alt=""
                            />
                            <h1>Chicken Wings</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/King-Mussel.png").default}
                              alt=""
                            />
                            <h1>King Mussel</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={
                                require("../assets/Crispy-Jumbo-Shrimp.png")
                                  .default
                              }
                              alt=""
                            />
                            <h2>Princess Jumbo Shrimp</h2>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Pad-Pak.png").default}
                              alt=""
                            />
                            <h1>Pad Pak Curry</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={
                                require("../assets/Sesame-Chicken.png").default
                              }
                              alt=""
                            />
                            <h1>Sesame Chicken</h1>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={require("../assets/Kow-Pad.png").default}
                              alt=""
                            />
                            <h1>Kow Pad</h1>
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
                                <button class="order-button" onClick={() => {window.confirm("Cream Cheese Wontons Added to Cart."); addCream();}}><span>Add to Order</span> </button>
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Chicken Wings - $8
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Chicken Wings Added to Cart."); addChicken();}}><span>Add to Order</span> </button>
                              </div>
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
                                <button class="order-button" onClick={() => {window.confirm("Pad Pak Curry Added to Cart."); addPadPakCurry();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Pad Ped - $11.50
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pad Ped Added to Cart."); addPadPed();}}><span>Add to Order</span> </button>                              </div>
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
                                <button class="order-button" onClick={() => {window.confirm("Seafood Combination Added to Cart."); addSeaFoodComb();}}><span>Add to Order</span> </button>                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                King Mussel - $14.00
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("King Mussel Added to Cart."); addKingMussel();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Royal Ginger Jumbo Shrimp - $13.95
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Royal Ginger Jumbo Shrimp Added to Cart."); addRoyalGingerJumbo();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Crispy Jumbo Shrimp - $13.95
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Crispy Jumbo Shrimp Added to Cart."); addCrispyJumbo();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Princess Jumbo Shrimp - $13.95
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Princess Jumbo Shrimp Added to Cart."); addPrincess();}}><span>Add to Order</span> </button>                                
                                <br />
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
                                <button class="order-button" onClick={() => {window.confirm("Kow Pad Added to Cart."); addKowPad();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                              Kow Pad Prik - $10.50
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Kow Pad Prik Added to Cart."); addKowPadPrik();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Pad Thai - $10.75
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pad Thai Added to Cart."); addPadThai();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Pad See-Ew - $10.75
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pad See-Ew Added to Cart."); addPadSeeEw();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Pad Prik - $10.15
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pad Prik Added to Cart."); addPadPrik();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Pad Pak - $10.15
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pad Pak Added to Cart."); addPadPak();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Pad Normai - $10.15
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pad Normai Added to Cart."); addPadNormai();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                Pad Cashew Nut - $10.15
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pad Cashew Nut Added to Cart."); addPadCashew();}}><span>Add to Order</span> </button>                              
                                </div>
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
                                <button class="order-button" onClick={() => {window.confirm("Palace's Special Pho Added to Cart."); addSpecialPho();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                              Seafood Pho - $13.00
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Seafood Pho Added to Cart."); addSeafoodPho();}}><span>Add to Order</span> 
                                </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Regular Pho - $10.00
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Regular Pho Added to Cart."); addRegularPho();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                                House Special Soup (With Noodles) - $11.00
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("House Special Soup (With Noodles) Added to Cart."); addHouseSpecialSoupWithNoodles();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                              House Special Soup (No Noodles) - $10.00
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("House Special Soup (No Noodles) Added to Cart."); addHouseSpecialSoupNoNoodles();}}><span>Add to Order</span> </button>                                
                                <br />
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
                                <button class="order-button" onClick={() => {window.confirm("Papaya Salad (Thai Style) Added to Cart."); addPapayaSalad();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                              Cucumber Papaya Salad - $8.99
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Cucumber Papaya Salad Added to Cart."); addCucumberPapayaSalad();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                                Seafood Papaya Salad - $10.99
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Seafood Papaya Salad Added to Cart."); addSeafoodPapayaSalad();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                               Beef Laab - $14.99
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Beef Laab Added to Cart."); addBeefLaab();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>
                            <div class="order-item-left">
                              <div class="dish-order">
                              Beef Raw Laab - $14.99
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Beef Raw Laab Added to Cart."); addBeefRawLaab();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div> 
                            <div class="order-item-right">
                              <div class="dish-order">
                               Seafood Laab - $15.99
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Seafood Laab Added to Cart."); addSeafoodLaab();}}><span>Add to Order</span> </button>                              
                                </div>
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
                                <button class="order-button" onClick={() => {window.confirm("Sesame Chicken Added to Cart."); addSesameChicken();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                             Pad Bok Choy - $10.15
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pad Bok Choy Added to Cart."); addPadBokChoy();}}><span>Add to Order</span> </button>                              
                                </div>
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
                                <button class="order-button" onClick={() => {window.confirm("White Rice Added to Cart."); addWhiteRice();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                             Sticky Rice - $5.00
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Sticky Rice Added to Cart."); addStickyRice();}}><span>Add to Order</span> </button>                              
                                </div>
                            </div>   
                            <div class="order-item-left">
                              <div class="dish-order">
                               Sausage Served With Sticky Rice - $8.00<br/>w/o rice $5.00
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Sausage Served with Sticky Rice Added to Cart."); addSausage();}}><span>Add to Order</span> </button>                                
                                <br />
                              </div>
                            </div>
                            <div class="order-item-right">
                              <div class="dish-order">
                             Pork Belly Served With Sticky Rice - $10.00<br/>w/o rice $7.00
                                <br />
                                <button class="order-button" onClick={() => {window.confirm("Pork Belly Served With Sticky Rice Added to Cart."); addPorkBelly();}}><span>Add to Order</span> </button>                              
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
        </div>
      </body>
    </html>
  );
}

export default Order;
