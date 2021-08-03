import React from "react";
import ItemGrid from "../components/ItemGrid";
import ItemObject from "../components/ItemObject";

const ItemPage = (props) => {
  const itemId = props.match.params.id;
  const item = props.clothes.find((item) => item.name.includes(itemId));
  return (
    <>
      <ItemObject item={item} addingToCart={props.addingToCart} />
      <div className="other">
        <ItemGrid items={props.clothes} limit={3} />
      </div>
    </>
  );
};

export default ItemPage;
