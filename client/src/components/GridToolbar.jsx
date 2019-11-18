import React from "react";
import "./GridToolBar.css";
import {Badge} from "react-bootstrap";

const GridToolbar = props => {
  return (
    <ul className="grid-toolbar">
      <li key="1" className="grid-toolbar-heading">{props.heading}</li>
      <li key="2" className="grid-toolbar-heading__count"><Badge variant="primary">{props.count}</Badge></li>
      <li key="3"><button type="button" className="grid-toolbar-button__add" onClick={props.onAdd}>+</button></li>
    </ul>
  );
};

export default GridToolbar;
