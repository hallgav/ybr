import React from "react";
import Redirect from "react-router-dom/Redirect"

import './App.css'
import Routes from "./routes";
import SideMenu from "./containers/SideMenu";

export default () => {
  return (
    <div className="app-layout">
      <Routes>
        <SideMenu />
      </Routes>
    </div>
  );
};
