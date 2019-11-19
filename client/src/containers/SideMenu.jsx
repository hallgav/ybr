import React from "react";
import "./SideMenu.css";
import PageNav from "../components/PageNav";

const NavLink = require("react-router-dom").NavLink
const Redirect = require("react-router-dom").Redirect

const SideMenu = props => (
  <div className="side-menu">
    <div className="side-menu__pannel">
      <ul>
        <li key="1">
          <NavLink to="/home" activeClassName="side-menu-item__active">Home</NavLink>
        </li>
        <li key="2">
          <NavLink to="/create" activeClassName="side-menu-item__active">Create</NavLink>
        </li>
        <li key="3">
          <NavLink to="/search" activeClassName="side-menu-item__active">Search</NavLink>
        </li>
        <li key="4">
          <NavLink to="/settings" activeClassName="side-menu-item__active">Settings</NavLink>
        </li>
      </ul>
    </div>
    <Redirect to="/home"/>
  </div>
);

export default SideMenu;
