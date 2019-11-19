import React, { useContext } from "react";
import "./Ybr.css";
import "./Home.css";
import SideMenu from "./SideMenu";
import PageNav from "../components/PageNav";
import ApplicationsContainer from "../containers/ApplicationsContainer";
import ServersContainer from "../containers/ServersContainer";

const NavLink = require("react-router-dom").NavLink;
const Redirect = require("react-router-dom").Redirect;
const Switch = require("react-router-dom").Switch;
const Route = require("react-router-dom").Route;

const useParams = require("react-router-dom").useParams;

const Ybr = props => {
  const { id } = useParams();
  return (
    <div>
      <PageNav heading={id} showLogIn>
        <div className="ybr-flexbox">
          <SideMenu />
          <div id="ybr-flexbox-body">
            <div className="ybr-flexbox__panel">
              ASSETS
              <ul id="nav">
                <li key="1">
                  <NavLink to={`/ybr/${id}/server`} activeClassName="ybr-flex-panel__active">Servers</NavLink>
                </li>
                <li key="2">
                  <NavLink to={`/ybr/${id}/application`} activeClassName="ybr-flex-panel__active">Applications</NavLink>
                </li>
              </ul>
            </div>

            <Switch>
              <Route
                path="/ybr/:id/server"
                exact
                component={ServersContainer}
              />
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
