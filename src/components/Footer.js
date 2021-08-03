import React from "react";
import MenuBar from "./MenuBar";

const Footer = () => (
  <>
    <footer>
      <div className="container">
        <MenuBar
          text={["About", "Customer Care", "Instagram"]}
          path={["", "", ""]}
        />
      </div>
      <p className="copyright">© Pretend Store</p>
    </footer>
  </>
);

export default Footer;
