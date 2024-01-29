import React from "react";
import Services from "./services/Services";
import AboutUs from "./aboutUs/AboutUs";
import HeroSection from "./heroSection/HeroSection";
import GetInTouch from "./getInTouch/GetInTouch";

const HomePage = () => {
  return (
    <React.Fragment>
       <HeroSection />
       <AboutUs />
       <Services />
       <GetInTouch />
    </React.Fragment>
  );
};

export default HomePage;
