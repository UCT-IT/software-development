import React from "react";
import WhoWeAre from "./whoWeAre/WhoWeAre";
import WhoWeAreTwo from "./whoWeAre/WhoWeAreTwo";
import Services from "./services/Services";
import AboutUs from "./aboutUs/AboutUs";
import HeroSection from "./heroSection/HeroSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <WhoWeAre />
      <WhoWeAreTwo />
      <AboutUs />
      <Services />
    </React.Fragment>
  );
};

export default HomePage;
