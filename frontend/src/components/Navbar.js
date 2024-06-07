import React from "react";
import logo from "../assets/img/svg/dcbLogo 1.svg";
import { NavLink } from "react-router-dom";
import refer from "../assets/img/svg/Wallet.svg";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: "black" }}>
      <div className="container d-flex justify-content-between">
        <div>
          <img src={logo} alt="Left Logo" className="navbar-logo" />
        </div>
        <div>
          <NavLink to="/compiler" className="text-white">
            <img src={refer} alt="Right Logo" className="navbar-logo" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
