import React from "react";
import "./YbrCard.css";
import { Panel } from "react-bootstrap";

const Link = require("react-router-dom").Link;

const ybrCard = props => {
  return (
    <div className="ybr-card-container">
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h4">{props.card.header}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>{props.card.text}</p>
          <Link to={props.card.path}>Open</Link>
        </Panel.Body>
      </Panel>
    </div>
  );
};

export default ybrCard;
