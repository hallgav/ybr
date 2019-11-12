import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import Home from "../containers/Home";
import Ybr from "../containers/Ybr";
import ServersContainer from "../containers/ServersContainer";
import ApplicationsContainer from "../containers/ApplicationsContainer";
import SideMenu from "../containers/SideMenu";

export default () => (
  <BrowserRouter>
      <Route path="/" component={SideMenu} />
      <Route path="/home" exact component={Home} />
      <Route path="/create" exact component={Create} />
      <Route path="/search" exact component={Search} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/ybr/:id" component={Ybr} />
      <Route path="/ybr/:id/server" exact component={ServersContainer} />
      <Route path="/ybr/:id/application" exact component={ApplicationsContainer} />
  </BrowserRouter>
);


const Create = () => (
  <h2>Create a new YBR</h2>
);
const Settings = () => (
  <h2>Set Your Preferences</h2>
);
const Search = () => (
  <h2>Search for a YBR</h2>
);
