import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

const Logo = () => (
  <NavLink exact to="/" className="logo">
    <img src={logo} alt="L&B" className="logoIMG" />
  </NavLink>
);

export default Logo;
