import React from "react";
import heroImg from "../img/hero.png";
import Button from "./Button";

const Hero = () => (
  <>
    <div className="hero">
      <img src={heroImg} alt="hero" className="hero-img" />
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          repudiandae, id laborum labore sint porro aspernatur nesciunt, veniam
          maxime commodi quibusdam corrupti vitae nemo.
        </p>
        <Button text="OUR PRODUCTS" classes="is-primary" />
      </div>
    </div>
  </>
);

export default Hero;
