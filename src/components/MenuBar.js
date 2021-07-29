import React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = ({ text, path }) => {
  // Creating the list items for the navbar
  const listItems = [];
  for (let i = 0; i < text.length; i++) {
    const listItem = (
      <li>
        <NavLink className="navbar-item" exact to={path[i]}>
          {text[i]}
        </NavLink>
      </li>
    );
    listItems.push(listItem);
  }

  return <ul className="navbar-menu">{listItems}</ul>;
};

export default MenuBar;
