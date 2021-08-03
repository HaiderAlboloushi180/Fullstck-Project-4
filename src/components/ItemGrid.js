import React from "react";
import Item from "./Item";
import Button from "./Button";

const ItemGrid = ({ items, limit }) => {
  const itemsLimit = items.slice(0, limit);
  const itemsList = itemsLimit.map((item) => (
    <Item key={item.image} item={item} />
  ));
  return (
    <>
      <ul className="item-grid">{itemsList}</ul>
      <div className="button-container">
        <Button text="MORE PRODUCTS" classes="is-secondary" />
      </div>
    </>
  );
};

export default ItemGrid;
