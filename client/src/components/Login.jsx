import React from "react";
import PageNav from "../components/PageNav";
import "./Login.css";
import LoaderButton from "../components/LoaderButton";
import { FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";

const Login = props => {
  return (
    <div className="ybr-login-page">
      <PageNav heading="YBR Login"></PageNav>
      <div className="ybr-login-page__container">
        <form className="ybr-login-page__input" onSubmit={props.onSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={props.email}
              onChange={props.onChange}
            />
          </FormGroup>
          <FormGroup controlId="pwd" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={props.pwd}
              onChange={props.onChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            type="submit"
            isLoading={props.isLoading}
            text="Login"
            loadingText="Logging in…"
          >
            Login
          </LoaderButton>
          {props.hasError ? <LoginError message={props.errorMessage} /> : null}
        </form>
      </div>
    </div>
  );
};

const LoginError = props => {
  return (
    <Alert id="ybr-login-page__error-alert" bsStyle="danger">
      {props.message}
    </Alert>
  );
};

export default Login;
