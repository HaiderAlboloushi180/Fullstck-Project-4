import React from "react";
import Button from "../components/Button";
import CartItem from "../components/CartItem";

const CartPage = (props) => {
  const cart = props.cartItems.map((item) => (
    <CartItem item={item} deleteItem={props.deleteOne} />
  ));
  const trimExtension = (filename) => filename.split("$")[0];
  let price = 0;

  for (let i = 0; i < props.cartItems.length; i++) {
    const itemPrice = props.cartItems[i].price;
    const numberPrice = Number(trimExtension(itemPrice));
    price += numberPrice;
  }

  return (
    <>
      <div className="cartPage-container">
        <p>Your Cart</p>
        {cart}
        <div className="cart-item all-items">
          <p>All items</p>
          <div className="space"></div>
          <p>{props.cartItems.length}</p>
          <p>{`$${price.toFixed(2)}`}</p>
          <Button text="CHECK OUT ALL" classes="is-primary" />
          <button className="button is-primary" onClick={props.deleteAll}>
            DELETE ALL
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
