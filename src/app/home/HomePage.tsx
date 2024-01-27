import React from "react";
import AboutUs from "./aboutUs/AboutUs";
import HeroSection from "./heroSection/HeroSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutUs />
    </React.Fragment>
  );
};

export default HomePage;
