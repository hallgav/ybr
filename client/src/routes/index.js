import React, { useContext } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Home from "../containers/Home";
import Ybr from "../containers/Ybr";
import LoginContainer from "../containers/LoginContainer";
import {UserContext} from "../contexts/UserContext";

export default () => {
  const [isAuth, setAuth] = useContext(UserContext);

  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginContainer} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/signup" exact component={LoginContainer} />
      <Route path="/home" exact component={isAuth ? Home : Login} />
      <Route path="/create" exact component={isAuth ? Create : Login} />
      <Route path="/search" exact component={isAuth ? Search : Login} />
      <Route path="/settings" exact component={isAuth ? Settings : Login} />
      <Route path="/ybr/:id" component={isAuth ? Ybr : Login} />
    </BrowserRouter>
  );
};

const Login = () => <Redirect to="/login"/>;

const Create = () => <h2>Create a new YBR</h2>;
const Settings = () => <h2>Set Your Preferences</h2>;
const Search = () => <h2>Search for a YBR</h2>;
