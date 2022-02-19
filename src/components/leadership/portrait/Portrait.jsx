import React from "react";
import { Card } from "react-bootstrap";

import { Icon } from "../../icons";
import { StyledPortrait } from "./Portrait.styled";
import { string } from "prop-types";

const Portrait = ({ name, title, img, link }) => {
  let not_found =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  return (
    <StyledPortrait>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img ? img : not_found} />
        <Card.Body className="portrait-details">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{name}</Card.Text>
          <Card.Text>
            <a href={link}>
              <Icon name="Instagram" />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </StyledPortrait>
  );
};

Portrait.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
  img: string.isRequired,
  link: string.isRequired,
};

export default Portrait;
