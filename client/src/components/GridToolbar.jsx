import React from "react";
import "./GridToolBar.css";
import Badge from "react-bootstrap/Badge";

const GridToolbar = props => {
  const onClickAddHandler = (props) => {
    alert("Will add a new item")
  }

  const onClickDeleteHandler = (props) => {
    alert("Will delete the selected item")
  }

  return (
    <ul className="grid-toolbar">
      <li className="grid-toolbar-heading">{props.heading}</li>
      <li className="grid-toolbar-heading__count"><Badge variant="primary">{props.count}</Badge></li>
      <li><button type="button" className="grid-toolbar-button__add" onClick={onClickAddHandler}>+</button></li>
      <li><button type="button" className="grid-toolbar-button__delete" onClick={onClickDeleteHandler}>-</button></li>
    </ul>
  );
};

export default GridToolbar;
