import React from "react";
import "../Maincss/About.css";
import Review from "./Review";
import about from "../image/about.png";
const About = () => {
  return (
    <div>
      <p id="about-p">ABOUT US</p>
      <p id="best-cust">
        Best customer <span id="best-cust1">experi</span>
        <span id="best-cust2">ence</span>
      </p>
      <div id="img">
        <img src={about} id="about-img"></img>
      </div>
      <p id="abt-a">About US</p>
      <p id="best-p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>
      <br></br>
      <p id="best-p2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button id="best-learnmore">learn More</button>
      <Review />
    </div>
  );
};

export default About;
