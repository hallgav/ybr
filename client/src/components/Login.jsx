import React from "react";
import PageNav from "../components/PageNav";
import "./Login.css";
import LoaderButton from "../components/LoaderButton";
import { FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";

const Login = props => {
  return (
    <div className="ybr-login-page">
      <PageNav heading="YBR Login" showSignUp={!props.signup}/>
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
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={props.password}
              onChange={props.onChange}
              type="password"
            />
          </FormGroup>
          {props.signup ? <ConfirmPassword {...props}/> : null}

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

const ConfirmPassword = props => {
  return(
    <FormGroup controlId="confirm-password" bsSize="large">
    <ControlLabel>Confirm Password</ControlLabel>
    <FormControl
      value={props.confirmPassword}
      onChange={props.onChange}
      type="password"
    />
  </FormGroup>
  )
}

const LoginError = props => {
  return (
    <Alert id="ybr-login-page__error-alert" bsStyle="danger">
      {props.message}
    </Alert>
  );
};

export default Login;
