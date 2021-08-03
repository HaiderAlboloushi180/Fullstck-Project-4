import React from "react";
import Hero from "../components/Hero";
import ItemGrid from "../components/ItemGrid";

const HomePage = ({ clothes }) => (
  <>
    <Hero />
    <ItemGrid items={clothes} limit={9} />
  </>
);

export default HomePage;
