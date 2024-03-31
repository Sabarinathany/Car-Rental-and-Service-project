import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Ride from "./Ride.js";
import "../Maincss/Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import img from "./car.png";
import Menu from "../image/Menu_icon.png";
import logo from "../image/logo.png";
import playstore from "../image/playstore.png";
import ios from "../image/ios.png";
const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("gainsboro");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollPosition >= window.innerHeight) {
      setBackgroundColor("	#F0F0F0");
    } else {
      setBackgroundColor("  gainsboro");
    }
  }, [scrollPosition]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const ToggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav id="nav">
              <div>
                <img src={logo} width={100} id="lodoo"></img>
                <ul id="ul" className={mobileMenu ? "hide-mobile-menu" : ""}>
                  <li className="li" id="nav-home">
                    <a id="anchor" href="#">
                      Home
                    </a>
                  </li>
                  <li className="li">
                    <a id="anchor" href="#ride-p">
                      Ride
                    </a>
                  </li>
                  <li className="li">
                    <a id="anchor" href="#Service">
                      Services
                    </a>
                  </li>
                  <li className="li">
                    <a id="anchor" href="#about-p">
                      About
                    </a>
                  </li>
                  <li className="li">
                    <a id="anchor" href="#review-p">
                      Reviews
                    </a>
                  </li>

                  <li className="li" id="sign-up">
                    <a id="anchor" href="/Login">
                      Sign Up
                    </a>
                  </li>
                  <li className="li" id="sign-in">
                    <a href="#" id="sing-in-a">
                      Sing in
                    </a>
                  </li>
                  <div id="menu">
                    <img
                      src={Menu}
                      id="menu"
                      onClick={ToggleMenu}
                      className="Menu"
                    ></img>
                  </div>
                </ul>
              </div>
            </nav>
            <span id="span-1a">Looking</span>
            <span id="span-to">to</span>
            <p id="rent-a"> rent a car</p>
            <img id="jeep-img" src={img}></img>

            <p id="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <img id="playstore-img" src={playstore}></img>
            <img id="ios-img" src={ios}></img>
            <div id="form">
              <label id="laba-1" for="">
                Location
              </label>
              <br></br>
              <input
                id="in-1"
                type="text"
                list="cities"
                placeholder="Search Places"
              ></input>
              <datalist id="cities">
                <option value="Chennai"></option>
                <option value="Madurai"></option>
                <option value="Coimbator"></option>
                <option value="Pandicherry"></option>
              </datalist>
              <br></br>{" "}
              <label id="laba-1" for="">
                Pick-Up Date
              </label>
              <br></br>
              <input id="in-1" type="date"></input>
              <br></br>
              <label id="laba-1">Return Date</label>
              <br></br>
              <input id="in-1" type="date"></input>
              <br></br>
              <button type="sumbit" id="sub">
                <a href="/Login" id="sub-mit">
                  Submit
                </a>
              </button>
            </div>
          </div>
        </div>
        <Ride />
      </div>
    </div>
  );
};

export default Nav;
