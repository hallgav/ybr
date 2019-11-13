import React from "react";
import "./GridToolBar.css";
import Badge from "react-bootstrap/Badge";

const GridToolbar = props => {
  return (
    <ul className="grid-toolbar">
      <li className="grid-toolbar-heading">{props.heading}</li>
      <li className="grid-toolbar-heading__count"><Badge variant="primary">{props.count}</Badge></li>
      <li><button type="button" className="grid-toolbar-button__add" onClick={props.onAdd}>+</button></li>
    </ul>
  );
};

export default GridToolbar;
