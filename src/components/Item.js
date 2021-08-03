import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ item }) => (
  <>
    <li className="item">
      <NavLink exact to={`/collection/${item.name}`}>
        <img src={require(`../img/${item.image}`)} alt={item.name} />
        <div className="item-text">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      </NavLink>
    </li>
  </>
);

export default Item;
