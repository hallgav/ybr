import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import "./SideMenu.css";
import Home from "./Home"

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home></Home>
  },
  {
    path: "/search",
    main: () => <h2>Search</h2>
  },
  {
    path: "/create",
    main: () => <h2>Create</h2>
  },
  {
    path: "/settings",
    main: () => <h2>Settings</h2>
  }
];

const SideMenu = props => (
  <Router>
    <div className="side-menu">
      <div className="side-menu__pannel">
        <ul>
          <li>
            <Link to="/">Home</Link>
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

      <div className="side-menu__content">
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </div>
  </Router>
);

export default SideMenu;
