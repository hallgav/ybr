import React from "react";
import Input from "../components/Input";
import PageNav from "../components/PageNav";
import "./Login.css";

const Login = props => {
  return (
    <div className="ybr-login-page">
      <PageNav heading="YBR Login"></PageNav>
      <div className="ybr-login-page__input"> 
        <Input label="User Id/email"></Input>
        <Input type="password" label="Password"></Input>
        <button onClick={props.onLogin}>Login</button>
      </div>

    </div>
  );
};

export default Login;
