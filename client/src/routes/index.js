import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "../containers/Home";
import ybr from "../containers/Ybr";
import servers from "../containers/Servers";
import applications from "../containers/Applications";

export default () => (
  <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/create" exact component={Create} />
      <Route path="/search" exact component={Search} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/ybr:id" exact component={ybr} />
      <Route path="/ybr/:id/server" exact component={servers} />
      <Route path="/ybr/:id/applications" exact component={applications} />
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
