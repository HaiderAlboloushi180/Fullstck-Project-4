import React from "react";
import { NavLink } from "react-router-dom";
import cart from "../img/cart.svg";

const Cart = () => (
  <>
    <NavLink className="container" exact to="/cart">
      <div className="cart">
        <img src={cart} alt="cart" />
        <span>Cart</span>
      </div>
    </NavLink>
  </>
);

export default Cart;
