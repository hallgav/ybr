import React from "react";
import Link from "react-router-dom/Link";
// import Switch from "react-router-dom/Switch";
// import Route from "react-router-dom/Route";
import "./Ybr.css";
import Servers from "./Servers";
import Applications from "./Applications";
const useParams = require("react-router-dom").useParams;

const ybr = props => {
  return (
    <div>
      <div className="ybr-flexbox__panel">
        ASSETS
        <ul>
          <li>
            <Link to={`/ybr/${YbrId()}/server`}>Servers</Link>
          </li>
          <li>
            <Link to={`/ybr/${YbrId()}/application`} state={{id: YbrId()}}>Applications</Link>
          </li>
        </ul>
      </div>
      <div className="ybr-flexbox__content"></div>
    </div>
  );
};

function YbrId() {
  let { ybrId } = useParams();
  return ybrId;
}

function ServersRout() {
  let { id } = useParams();

  return <Servers ybrId={id} />;
}

function ApplicationsRout() {
  let { id } = useParams();

  return <Applications ybrId={id} />;
}

export default ybr;
