import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import AvailableTools from "./AvailableTools/AvailableTools";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navigation from "./Navigation/Navigation";
import Steps from './Steps/Steps'

const Index = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutSection />
      <AvailableTools />
      <Steps />
      <Footer />
    </>
  );
};

export default Index;
