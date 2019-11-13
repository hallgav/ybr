import React from "react";
import "./Ybr.css";

const Link = require("react-router-dom").Link
const Redirect = require("react-router-dom").Redirect


const useParams = require("react-router-dom").useParams;

const Ybr = props => {
  const { id } = useParams();
  return (
    <>
      <div className="ybr-flexbox__panel">
        ASSETS
        <ul>
          <li key="1">
            <Link to={`/ybr/${id}/server`}>Servers</Link>
          </li>
          <li key="2">
            <Link to={`/ybr/${id}/application`}>Applications</Link>
          </li>
        </ul>
      </div>
      <div className="ybr-flexbox__content"></div>
      <Redirect to={`/ybr/${id}/server`} />
    </>
  );
};

export default Ybr;
