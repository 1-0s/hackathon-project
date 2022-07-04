import React from "react";
import Footer from "../Homepage/Footer/Footer";
import Navigation from "../Homepage/Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
