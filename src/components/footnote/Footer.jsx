import React from "react";
import { Icon } from "../icons";

/* images */
import crest from "../../img/crest.png";
import { StyledFooter, StyledSocialLinks, StyledCredit } from "./Footer.styled";

const Footer = () => {
  let socialMedia = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ucsdkappasig/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kappasigmaucsd/",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCB_P3xornSa5kcIry7kJI5g",
    },
  ];

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
      <StyledCredit>
        <p>Pi-Psi Chapter of Kappa Sigma</p>

        <a href="https://www.kappasigma.org">
          <picture>
            <source src={crest} />
            <img src={crest} alt="Kappa Sigma Crest" />
          </picture>
        </a>

        <p>@2022 by Kappa Sigma</p>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
