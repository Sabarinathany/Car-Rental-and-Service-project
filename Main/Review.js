import React from "react";
import { useState } from "react";
import "../Maincss/Review.css";
import { FaHeart } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { TbSocial } from "react-icons/tb";
import { FaStarHalf } from "react-icons/fa";
import Footer from "./Footer";
import ScrollTriger from "react-scroll-trigger";
import rev1 from "../image/rev1.jpg";
import rev2 from "../image/rev2.jpg";
import rev3 from "../image/rev3.jpg";
import rev4 from "../image/rev4.jpg";
import phonebg from "../image/phone bg.png";
import playstore from "../image/playstore.png";
import ios from "../image/ios.png";

import { FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
const Review = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <ScrollTriger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div>
          <p id="review-p">Reviews</p>
          <p id="review-p1">whats our customer say</p>
        </div>
        <div id="Review-count">
          <span id="review-icon">
            <FaHeart />
          </span>
          <span id="review-icon0">
            {counterOn && (
              <CountUp start={0} end={100} duration={7} delay={0} />
            )}
            %
          </span>
          <p id="review-customer">Happy Customer </p>
        </div>
        <div id="Review-count1">
          <span id="review-icon2">
            <IoPersonAddSharp />
          </span>
          <span id="review-icon3">
            {counterOn && (
              <CountUp start={0} end={450} duration={7} delay={0} />
            )}
            +
          </span>
          <p id="review-customer1">Monthly Clients </p>
        </div>
        <div id="Review-count2">
          <span id="review-icon3">
            <TbSocial />
          </span>
          <span id="review-icon4">
            {counterOn && <CountUp start={0} end={38} duration={7} delay={0} />}
            k+
          </span>
          <p id="review-customer2">Social Connections </p>
        </div>
      </ScrollTriger>

      <Swiper
        spaceBetween={-700}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        width={2500}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.l
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div id="review-content-1">
            <div id="review-speical">
              <img src={rev1} id="review-img1"></img>
              <p id="review-name">Jack Morran</p>
            </div>
            <span id="review-icon-star">
              <FaStar /> <FaStar /> <FaStar /> <FaStar />
              <FaStarHalf />
            </span>
            <p id="review-loren">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review-content-1">
            <div id="review-speical">
              <img src={rev2} id="review-img1"></img>
              <p id="review-name">Alan Walker</p>
            </div>
            <span id="review-icon-star">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </span>
            <p id="review-loren">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review-content-1">
            <div id="review-speical">
              <img src={rev3} id="review-img1"></img>
              <p id="review-name">Selena</p>
            </div>
            <span id="review-icon-star">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
            </span>
            <p id="review-loren">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div id="review-content-1">
            <div id="review-speical">
              <img src={rev4} id="review-img1"></img>
              <p id="review-name">Jack Morran</p>
            </div>
            <span id="review-icon-star">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
            </span>
            <p id="review-loren">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div id="review-content-1">
            <div id="review-speical">
              <img src={rev1} id="review-img1"></img>
              <p id="review-name">Jeni leo</p>
            </div>
            <span id="review-icon-star">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </span>
            <p id="review-loren">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div id="phone-png">
        <img id="phone1-png" src={phonebg}></img>
      </div>
      <p id="review-download">
        <span id="download-letter">Download </span>our app to get most out of it
      </p>
      <p id="review-download-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>
      <img id="playstore" src={playstore}></img>
      <img id="ios" src={ios}></img>
      <Footer />
    </div>
  );
};

export default Review;
