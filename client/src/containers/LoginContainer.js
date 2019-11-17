import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "../components/Login";
const useHistory = require("react-router-dom").useHistory;

const LoginContainer = () => {
  const [isAuth, setAuth] = useContext(UserContext);
  const history = useHistory();

  const onLoginClickHandler = () => {
    console.log("isAuth ---------------------" + isAuth);
    //Authenticate and then redirect
    setAuth(!isAuth);
    history.push("/home");
  };

  const onSignupClickHandler = () => {
    console.log("redirect to signup ---------------------");
    history.push("/signup");
  };

  return (
    <Login onLogin={onLoginClickHandler} />
  );
};

export default LoginContainer;
