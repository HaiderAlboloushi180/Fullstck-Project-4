import React from "react";
import SmallImg from "./SmallImg";

const ItemObject = (props) => (
  <div className="itemPage-container">
    <div className="small-images">
      <SmallImg item={props.item} />
      <SmallImg item={props.item} />
      <SmallImg item={props.item} />
    </div>
    <div>
      <img
        src={require(`../img/${props.item.image}`)}
        alt={props.item.name}
        className="big-image"
      />
    </div>
    <div className="item-desc">
      <h1 className="item-price">{props.item.price}</h1>
      <h1 className="item-name">{props.item.name}</h1>
      <p>{props.item.description}</p>
      <div className="colors">
        <b>Color:</b>
        <p> Pink</p>
        <div className="color-boxes">
          <div className="pink"></div>
          <div className="blue"></div>
          <div className="black"></div>
        </div>
      </div>
      <div className="add">
        <input
          type="number"
          name="counter"
          placeholder="0"
          min={1}
          className="counter"
        />
        <button
          className="is-primary addto"
          onClick={() => props.addingToCart(props.item)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
);

export default ItemObject;
