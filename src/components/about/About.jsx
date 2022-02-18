import React from "react";

import { StyledAbout, StyledText, StyledImage } from "./About.styled";
import group from "../../img/group_pic_top.JPG";

const About = () => {
  return (
    <StyledAbout>
      <h2>About Kappa Sigma</h2>

      <StyledImage>
        <source srcSet={group} alt="Active Brothers" />
        <img src={group} alt="group" />
      </StyledImage>

      <StyledText>
        <p>
          Fellowship, Leadership, Scholarship, Service. These are the four
          pillars of Kappa Sigma.
        </p>

        <p>
          The Pi-Psi chapter of Kappa Sigma was founded in 2009. Since then, the
          chapter has strived for greatness. Kappa Sigma aims to give brothers
          the best undergraduate experience and prepare them from life after
          graduation. From academic support for current members, networking with
          alumni, and preparation for graduate programs, Kappa Sigma creates
          excellence.
        </p>
        <p>
          Kappa Sigma has 16000 active brothers in 305 chapters. We have raised
          over $12 million in the past four years. Kappa Sigma truly is a
          brotherhood like no other. Number one, second to none.
        </p>
        <p>A.E.K.Δ.B.</p>
      </StyledText>
    </StyledAbout>
  );
};

export default About;
