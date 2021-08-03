import React from "react";

const CartPage = ({ cartItems }) => {
  const cart = cartItems.map((item) => {
    return (
      <>
        <h1>{item.name}</h1>
      </>
    );
  });
  return (
    <>
      <h4>Your Cart</h4>
      {cart}
    </>
  );
};

export default CartPage;
