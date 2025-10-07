import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import ImageContainer from "../ImageContainer/ImageContainer";
import Routes from "./Routes";

import "./Container.scss";

const Container = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <div className="main__container">
      <Router>
        <NavBar />
        {width > 1280 && <ImageContainer />}
        <Routes />
      </Router>
    </div>
  );
};

export default Container;
