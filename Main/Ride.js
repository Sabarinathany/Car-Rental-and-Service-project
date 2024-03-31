import React from "react";

import "../Maincss/Ride.css";
import c1 from "../image/c1.png";
import c2 from "../image/c2.png";
import map from "../image/map.png";
import Service from "./Service";
// import lg from "";
const Ride = () => {
  return (
    <div>
      <p id="ride-p">HOW ITS WORK</p>
      <p id="ride-rent">
        Rent with <span id="rride-rent">3 easy steps</span>
      </p>
      <div id="ride-logo">
        <img src={c2} id="c2-logo"></img>
        <p id="r-location">Choose a location</p>
        <p id="r-lorem">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div id="ride1-logo">
        <img src={c1} id="c1-logo"></img>
        <p id="r1-location">Pick-Up Date</p>
        <p id="r1-lorem">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div id="ride3-logo">
        <img src={map} id="c3-logo"></img>
        <p id="r3-location">Book A Car</p>
        <p id="r3-lorem">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <Service />
    </div>
  );
};

export default Ride;
