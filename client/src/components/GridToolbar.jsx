import React from "react";
import "./GridToolBar.css";
import { Badge } from "react-bootstrap";

const GridToolbar = props => {
  return (
    <ul className="grid-toolbar">
      <li key="1" className="grid-toolbar-heading">
        {props.heading}
      </li>
      {props.isLoading ? null : (
        <>
          <li key="2" className="grid-toolbar-heading__count">
            <Badge variant="primary">{props.count}</Badge>
          </li>
          <li key="3">
            <button type="button" onClick={props.onAdd}>
              +
            </button>
          </li>
          <li key="4">
            <button type="button" onClick={props.onChartClick}>
              {props.ChartButtonText}
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default GridToolbar;
