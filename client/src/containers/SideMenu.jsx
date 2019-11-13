import React from "react";
import "./SideMenu.css";

const Link = require("react-router-dom").Link
const Redirect = require("react-router-dom").Redirect

const SideMenu = props => (
  <div className="side-menu">
    <div className="side-menu__pannel">
      <ul>
        <li key="1">
          <Link to="/home">Home</Link>
        </li>
        <li key="2">
          <Link to="/create">Create</Link>
        </li>
        <li key="3">
          <Link to="/search">Search</Link>
        </li>
        <li key="4">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
    <Redirect to="/home"/>
  </div>
);

export default SideMenu;
