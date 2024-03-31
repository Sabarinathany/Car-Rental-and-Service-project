import React from "react";
import "../Maincss/Login.css";

// import log from "../image/log.png";
import women from "../image/women.png";
import { FaCheck } from "react-icons/fa";
import blue from "../image/blue.png";
import logo from "../image/logo.png";
import Business from "../image/Business.png";
const Login = () => {
  return (
    <div>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}

      {/* Import Google Fonts CSS */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      /> */}
      <div id="form-all">
        <div id="form-img">
          <img id="log-img1" src={women}></img>
        </div>
        <img id="logo1" src={logo}></img>
        <div id="log-form-para">
          <p id="log-p1">
            create your account and <span id="Moving"> start moving</span>
          </p>
          <div className="form-p">
            <img id="blue" src={blue}></img>
            <p>
              <span id="check">
                {" "}
                <FaCheck />
              </span>
              get access to member exclusive car{" "}
            </p>
            <p>
              <span id="check">
                {" "}
                <FaCheck />
              </span>
              get world-class experts
            </p>
            <p>
              <span id="check">
                {" "}
                <FaCheck />
              </span>
              get the best service
            </p>
          </div>
          <form>
            <label id="form-label-a1">First Name *</label>
            <br></br> <input id="int-a1" type="text"></input>
            <br></br>
            <div className="form-label-2">
              <label id="form-label-2">Last Name *</label>
              <br></br>
              <input id="int-2" type="text"></input>
            </div>
            <br></br>
            <label id="form-label-3">E-mail *</label>
            <br></br>
            <input id="int-3" type="text"></input>
            <br></br> <label id="form-label-4">Password *</label>
            <br></br> <input id="int-4" type="password"></input>
            <br></br>{" "}
            <div className="form-label-5">
              <label id="form-label-5">Retype Password *</label>
              <br></br> <input id="int-5" type="password"></input>
            </div>
            <br></br>
            <p id="last-para">
              by creating an account,you agree to{" "}
              <span id="span-1">
                <a
                  href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                  id="a1"
                >
                  privacy policy
                </a>
              </span>
              <span id="z">and</span>
              <span id="span-2">
                <a
                  href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
                  id="a1"
                >
                  Terms of Use
                </a>
              </span>
            </p>
            <button id="sing1-btn">Sing up</button>
            <button id="sing1-add">
              <a href="/" id="add">BACK</a>
            </button>
          </form>
          <p className="final">
            Already a member ?<span className="final-log">log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
