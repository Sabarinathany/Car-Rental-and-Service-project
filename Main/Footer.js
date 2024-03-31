import React from "react";
import "../Maincss/Footer.css";
import { IoIosCall } from "react-icons/io";
import { IoMdMailOpen } from "react-icons/io";
const Footer = () => {
  return (
    <div>
      <div id="footer-all">
        <div id="car-rental">
          <p id="rental-p1">CAR rental</p>
          <p id="rental-p2">
            we offers a big range of vehicle for of your driving needs we have
            the perfect car so meet your needs.
          </p>
          <br></br>
          <p id="rental-ph">
            <IoIosCall />
            +91 1234567890
          </p>
          <p id="rental-mail">
            <IoMdMailOpen /> carrental@gmail.com
          </p>
        </div>
        <div id="car-citys">
          <p id="car-p1">company</p>
          <li id="car-li">chennai</li>
          <li id="car-li">bangalore</li>
          <li id="car-li">pondy</li>
          <li id="car-li">pudupettai</li>
        </div>
        <div id="car-hours">
          <p id="hours-p1">working hours</p>
          <li id="li-hours">mon-fri 9.00PM-9.00PM</li>
          <li id="li-hours">SAT 9.00PM-1.00PM</li>
          <li id="li-hours">SUN Closed</li>
        </div>
        <div id="car-subscribe">
          <p id="car-sub1">subscribe</p>
          <p id="car-sub2">
            subscribe your emsil address for rental news & updates
          </p>
          <form action="https://api.web3forms.com/submit" method="POST">
            {/* <input
              type="hidden"
              name="sabari"
              value="5d27ea35-720a-4999-b94b-af49d880cbd8"
            ></input> */}
            <input
              id="car-input"
              type="text"
              placeholder="      Enter Email Address"
            ></input>
            <br></br>{" "}
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            ></input>
            <button type="submit" id="car-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
