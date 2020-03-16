import React from "react";
import NavBar from "../components/public/NavBar";
import Footer from "../components/public/Footer";

const PublicLayout = props => {
  
	return (
    <>
      <NavBar/>
        {props.children}
      <Footer/>
    </>
	);
};

export default PublicLayout;
