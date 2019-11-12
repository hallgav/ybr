import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./SideMenu.css";


const SideMenu = props => (
  <div className="side-menu">
    <div className="side-menu__pannel">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
    <Redirect to="/home"/>
  </div>
);

export default SideMenu;
