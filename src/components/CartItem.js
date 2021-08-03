import React from "react";
import Button from "./Button";

const CartItem = (props) => (
  <>
    <div className="cart-item">
      <div className="theItem">
        <img
          src={require(`../img/${props.item.image}`)}
          alt={props.item.name}
        />
        <p>{props.item.name}</p>
      </div>
      <p>01</p>
      <p>{props.item.price}</p>
      <Button text="CHECK OUT" classes="" />
      <button className="button" onClick={() => props.deleteItem(props.item)}>
        DELETE
      </button>
    </div>
  </>
);

export default CartItem;
