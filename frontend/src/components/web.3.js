import React from "react";
import { FaDiscord } from "react-icons/fa";
import { Button } from "react-bootstrap";
// Create a custom CSS file for additional styling
import coin from "../assets/img/svg/coin.svg";
import { FaArrowRightLong } from "react-icons/fa6";
const ContentOverlay = () => {
  return (
    <div className="content-overlay">
      <h1 className="text-white1 ">
        Learn To Build With Web3.
        <br />
        Earn as Your Grow <img src={coin} alt="ddfddf" />{" "}
      </h1>
      <h6 className="text-white2"> LEARN . CODE . BUILD . EARN</h6>
      <p className="text-white2">
        Why to Pay for Learning. GET PAID for Learning with our
        <br /> expertly curated Gamified Challenges and Beginner friendly
        <br /> Pre-Configured Sandbox Environment
      </p>
      <div className="d-flex mt-4">
        <Button variant="primary" className="me-2">
          Sign up <FaArrowRightLong />
        </Button>
        <Button variant="light" className="d-flex align-items-center">
          <FaDiscord className="me-2" />
          Join Discord
        </Button>
      </div>
      <p className="text-white text-blurred mt-1"> Join our Waitlist</p>
    </div>
  );
};

export default ContentOverlay;
