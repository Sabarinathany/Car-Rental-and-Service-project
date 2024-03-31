import React from "react";
import "../Maincss/Service.css";
import car2 from "../image/car2.jpg";
import car1 from "../image/car1.jpg";
import car3 from "../image/car3.jpg";
import car4 from "../image/car4.jpg";
import car5 from "../image/car5.jpg";
import car6 from "../image/car6.jpg";
import STRUT from "../image/STRUT.jpg";
import builttoheal from "../image/builttoheal.jpg";
import extremeterrain from "../image/extremeterrain.jpg";
import jeepwrangle from "../image/jeepwrangle.jpg";
import jeepwranglers from "../image/jeepwranglers.jpg";
import thumb from "../image/thumb.jpg";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import About from "./About";
const Service = () => {
  return (
    <div id="Service">
      <div id="Best-service">
        <p id="s-p">Best Service</p>
        <p id="s-head">
          Explore out <span id="ss-head">top deals</span>
          <br></br>from top<span id="sss-head"> rated dealers</span>
        </p>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={-70}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car">
              <img id="car2" src={car2}></img>

              <p id="year">2017</p>
              <p id="honda-c1">2018 Honda civic</p>
              <p id="honda-price">
                $58500|$358<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn">
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car">
              <img id="car1" src={car1}></img>

              <p id="year">2016</p>
              <p id="honda-c1">2019 Honda Amaze</p>
              <p id="honda-price">
                $4950|$261<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn">
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car">
              <img id="car3" src={car3}></img>

              <p id="year">2017</p>
              <p id="honda-c1">2016 Honda WR-V</p>
              <p id="honda-price">
                $60000|$298<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car">
              <img id="car2" src={car6}></img>

              <p id="year">2019</p>
              <p id="honda-c1">2020 Honda-LPEV</p>
              <p id="honda-price">
                $44500|$325<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car">
              <img id="car2" src={car4}></img>

              <p id="year">2015</p>
              <p id="honda-c1">2016 Honda-HEV</p>
              <p id="honda-price">
                $23500|$325<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car">
              <img id="car2" src={car5}></img>

              <p id="year">2013</p>
              <p id="honda-c1">2014 Honda-Helter</p>
              <p id="honda-price">
                $34500|$325<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={-70}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car1">
              <img id="STRUT" src={STRUT}></img>

              <p id="year">2015</p>
              <p id="honda-c1">2015 Jeep-STRUT</p>
              <p id="honda-price">
                $68500|$450<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn1">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car1">
              <img id="car1" src={builttoheal}></img>

              <p id="year">2022</p>
              <p id="honda-c1">2022 Builtto-Heal </p>
              <p id="honda-price">
                $5350|$361<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn1">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car1">
              <img id="car3" src={extremeterrain}></img>

              <p id="year">2019</p>
              <p id="honda-c1">2019 Extremeter-Rain</p>
              <p id="honda-price">
                $74000|$349<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn1">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car1">
              <img id="car2" src={jeepwrangle}></img>

              <p id="year">2022</p>
              <p id="honda-c1">2022 Jeep-wrangle</p>
              <p id="honda-price">
                $49000|$375<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn1">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car1">
              <img id="car2" src={jeepwranglers}></img>

              <p id="year">2021</p>
              <p id="honda-c1">2021 Jeep-Wranglers</p>
              <p id="honda-price">
                $28500|$395<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn1">
                {" "}
                <a href="#nav" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="all-car-img">
            <div id="first-car1">
              <img id="car2" src={thumb}></img>

              <p id="year">2024</p>
              <p id="honda-c1">2024 Jeep-Thumb </p>
              <p id="honda-price">
                $44500|$395<span id="honda-month">/month</span>
              </p>
              <button id="rent-btn1">
                <a href="#home" id="order-rent">
                  Rent Now
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <br></br>
      {/* <p>
        {" "}
        <div id="all-car-img">
          <div id="first-car">
            <img id="car2" src={car6}></img>

            <p id="year">2022</p>
            <p id="honda-c1">2024 Honda-HVT</p>
            <p id="honda-price">
              $58500|$358<span id="honda-month">/month</span>
            </p>
            <button id="rent-btn">Rent Now</button>
          </div>
        </div>
      </p> */}
      <About />
    </div>
  );
};

export default Service;
