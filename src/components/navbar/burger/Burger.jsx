import React from "react";
import { bool, func } from "prop-types";

import { Twirl as Hamburger } from "hamburger-react";

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <div className="burger">
      <Hamburger
        toggled={open}
        toggle={setOpen}
        color="var(--pink)"
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
