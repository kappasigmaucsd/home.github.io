import React from "react";

import { StyledSplash } from "./Splash.styled";
import glitch from "../../img/moshed_crest.gif";

const Splash = () => {
  return (
    <StyledSplash>
      <img src={glitch} alt="crest" className="center" />
    </StyledSplash>
  );
};

export default Splash;
