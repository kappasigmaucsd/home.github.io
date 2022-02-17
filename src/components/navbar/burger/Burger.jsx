import React from "react";
import { bool, func } from "prop-types";

import { Squash } from "hamburger-react";

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <div className="burger">
      <Squash
        toggled={open}
        toggle={setOpen}
        color="#dd1c1c"
        onClick={() => setOpen(!open)}
        {...props}
      />
    </div>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
