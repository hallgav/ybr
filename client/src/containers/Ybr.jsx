import React, { useContext } from "react";
import "./Ybr.css";
import "./Home.css";
import SideMenu from "./SideMenu";
import PageNav from "../components/PageNav";
import ApplicationsContainer from "../containers/ApplicationsContainer";
import ServersContainer from "../containers/ServersContainer";

const Link = require("react-router-dom").Link;
const Redirect = require("react-router-dom").Redirect;
const Switch = require("react-router-dom").Switch;
const Route = require("react-router-dom").Route;

const useParams = require("react-router-dom").useParams;

const Ybr = props => {
  const { id } = useParams();
  return (
    <div className="home">
      <SideMenu />
      <PageNav heading={id}>
        <div className="ybr-flexbox">
          <div className="ybr-flexbox__panel">
            ASSETS
            <ul id="nav">
              <li key="1">
                <Link to={`/ybr/${id}/server`}>Servers</Link>
              </li>
              <li key="2">
                <Link to={`/ybr/${id}/application`}>Applications</Link>
              </li>
            </ul>
          </div>

          <div className="ybr-flexbox__content">
          <Switch>
            <Route path="/ybr/:id/server" exact component={ServersContainer} />
            <Route
              path="/ybr/:id/application"
              exact
              component={ApplicationsContainer}
            />
          </Switch>
          <Redirect to={`/ybr/${id}/server`} />
          </div>
        </div>
      </PageNav>
    </div>
  );
};

export default Ybr;
