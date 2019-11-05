import React from "react";
import Card from "react-bootstrap/Card";
import Link from "react-router-dom/Link";

import "./YbrCard.css";

const ybrCard = props => (
  <div className="ybr-card-container">
    <Card >
      <Card.Header>{props.card.header}</Card.Header>
      <Card.Body>
        {/* <Card.Title>{props.card.title}</Card.Title> */}
        <Card.Text>{props.card.text}</Card.Text>
        <Link to={props.card.path}>Open</Link>
      </Card.Body>
    </Card>
  </div>
);

export default ybrCard;
