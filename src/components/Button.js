import React from "react";

const Button = ({ classes, text }) => (
  <>
    <button className={`${classes} button`}>{text}</button>
  </>
);

export default Button;
