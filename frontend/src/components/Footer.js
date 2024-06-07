import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import logo from "../assets/img/svg/dcbLogo 1.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row h-100">
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <div>
              <img
                src={logo}
                alt="DcodeBlock Logo"
                className="footer-logo mb-3"
              />
              <p className="text-white">
                Explore blockchain concepts with expertised challenges. Engage
                in a vibrant community, participate in thrilling contests, and
                ace industry-leading problems.
              </p>
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" me-3"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" me-3"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" me-3"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" me-3"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 d-flex flex-column justify-content-center">
            <h5 className="text_blue mb-3">DCODEBLOCK</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/about" className="text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/features" className="text-white">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/works" className="text-white">
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/career" className="text-white">
                  Career
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2 offset-md-1 d-flex flex-column justify-content-center">
            <h5 className="text_blue mb-3">HELP</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/customer-support" className="text-white">
                  Customer Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/delivery-details" className="text-white">
                  Delivery Details
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-conditions" className="text-white">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="text-white">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <NavLink to="/privacy-policy" className="text_blue mx-3">
              Privacy Policy
            </NavLink>
            <span className="text-white mx-3">|</span>
            <NavLink to="/terms-and-condition" className="text_blue mx-3">
              Terms and Condition
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
