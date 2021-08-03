import React from "react";

const SmallImg = ({ item }) => (
  <img
    src={require(`../img/${item.image}`)}
    alt={item.name}
    className="small-image"
    width={75}
  />
);

export default SmallImg;
