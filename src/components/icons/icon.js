import React from "react";
import PropTypes from "prop-types";
import {
  IconExternal,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconFacebook,
  IconYouTube,
} from "./";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "LinkedIn":
      return <IconLinkedIn />;
    case "Facebook":
      return <IconFacebook />;
    case "YouTube":
      return <IconYouTube />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
