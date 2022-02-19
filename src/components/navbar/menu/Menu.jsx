import React from "react";

import { bool } from "prop-types";
import { Nav } from "react-bootstrap";

import { StyledMenu } from "./Menu.styled";
import "../../../scss/NavBar.scss";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;
  let pages = ["About", "Rush", "Leadership", "Contact"];

  const clicked = () => {
    props.setOpen(false);
  };

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {pages.map((page, idx) => {
        return (
          <Nav.Item key={idx}>
            <Nav.Link href={`${page.toLowerCase()}`} onClick={clicked}>
              {page}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
