import React from "react";

const Item = ({ item }) => (
  <>
    <li className="item">
      <a href={`/collection/${item.name}`}>
        <img src={require(`../img/${item.image}`)} alt={item.name} />
        <div className="item-text">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      </a>
    </li>
  </>
);

export default Item;
