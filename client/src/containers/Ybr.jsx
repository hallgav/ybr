import React from "react";
import Link from "react-router-dom/Link";
import Redirect from "react-router-dom/Redirect";

import "./Ybr.css";

const useParams = require("react-router-dom").useParams;

const Ybr = props => {
  const { id } = useParams();
  return (
    <>
      <div className="ybr-flexbox__panel">
        ASSETS
        <ul>
          <li>
            <Link to={`/ybr/${id}/server`}>Servers</Link>
          </li>
          <li>
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
