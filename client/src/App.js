import React from "react";

import "./App.css";
import Routes from "./routes";
import { UserProvider } from "./contexts/UserContext";

export default () => {
  return (
    <div className="app-layout">
      <UserProvider>
        <Routes>
          
        </Routes>
      </UserProvider>

    </div>
  );
};
