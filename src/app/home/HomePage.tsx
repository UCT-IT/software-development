import React from "react";
import Services from "./services/Services";
import AboutUs from "./aboutUs/AboutUs";
import HeroSection from "./heroSection/HeroSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutUs />
      {/* <Services /> */}
    </React.Fragment>
  );
};

export default HomePage;
