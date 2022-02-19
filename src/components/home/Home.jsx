import React from "react";

import { StyledHome, StyledText, StyledImage } from "./Home.styled";
import theme from "../../img/themed-letters.png";

//import "../../scss/Miami.scss";

const Home = () => {
  return (
    <StyledHome>
      <h2>UCSD Kappa Sigma</h2>

      <StyledImage>
        <source srcSet={theme}></source>
        <img src={theme} alt="theme" />
      </StyledImage>

      <StyledText>
        <h3 className="big-heading">
          <span>Spring</span>
          <br></br>
          <span>Rush 2022</span>
        </h3>
      </StyledText>
      <p>Number one, second to none.</p>
    </StyledHome>
  );
};

export default Home;
