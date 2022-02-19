import React from "react";

import { StyledAbout, StyledText, StyledImage } from "./About.styled";
//import group from "../../img/group_pic_top.JPG";

const About = () => {
  let group_pic1 =
    "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/273747018_6865158946892436_4338196065902788947_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a26aad&_nc_ohc=c4rvjp4xb9UAX8b14vO&_nc_ht=scontent-sjc3-1.xx&oh=00_AT_vCcLV8nU6TMAeFaOYMH_zlvibcvas0_3P7Nu9zTwTQQ&oe=6214E14A";
  let group_pic2 =
    "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/273565421_6853911611350503_6568056572477442020_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=faSAG5IRaUUAX8YzBp1&_nc_ht=scontent-sjc3-1.xx&oh=00_AT8ouO3qJf3s00EO30wB06qdVpuja9Ie7cL4qnq3S3_6zQ&oe=62143C7F";
  return (
    <StyledAbout>
      <h2>About Kappa Sigma</h2>

      <StyledImage>
        <source srcSet={group_pic1} alt="Active Brothers" />
        <img src={group_pic1} alt="group" />
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
