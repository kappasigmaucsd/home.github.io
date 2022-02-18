import React from "react";

import { StyledHome, StyledImage } from "./Home.styled";
import theme from "../../img/themed-letters.png";

import "../../scss/Miami.scss";

const Home = () => {
  return (
    <StyledHome>
      <h2>UCSD Kappa Sigma</h2>

      <StyledImage>
        <picture>
          <source srcSet={theme}></source>
          <img src={theme} alt="theme" />
        </picture>
      </StyledImage>

      <div id="title">
        <h1>
          <span>Spring</span>
          <br></br>
          <span>Rush 2022</span>
        </h1>
      </div>
      <p>Number one, second to none.</p>
    </StyledHome>
  );
};

export default Home;
