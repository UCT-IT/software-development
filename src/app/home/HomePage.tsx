import React from "react";
import WhoWeAre from "./whoWeAre/WhoWeAre";
import WhoWeAreTwo from "./whoWeAre/WhoWeAreTwo";
import Services from "./services/Services";
import AboutUs from "./aboutUs/AboutUs";
import HeroSection from "./heroSection/HeroSection";
import GetInTouch from "./getInTouch/GetInTouch";


const HomePage = () => {
  return (
    <React.Fragment>
        <HeroSection />
       <AboutUs />
      <WhoWeAre />
      <WhoWeAreTwo />
       <Services />
       <GetInTouch />
    </React.Fragment>
  );
};

export default HomePage;
