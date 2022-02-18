import React from "react";
import PropTypes from "prop-types";
import {
  IconExternal,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconFacebook,
  IconYouTube,
  IconSnapchat,
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
    case "Snapchat":
      return <IconSnapchat />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
