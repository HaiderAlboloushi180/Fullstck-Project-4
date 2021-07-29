import React from "react";
import MenuBar from "./MenuBar";
import Cart from "./Cart";
import Logo from "./Logo";

const Header = () => (
  <>
    <header>
      <div className="container">
        <Logo />
        <MenuBar
          text={["Home", "Collection", "Contact"]}
          path={["", "collection", "contact"]}
        />
      </div>
      <Cart />
    </header>
  </>
);

export default Header;
