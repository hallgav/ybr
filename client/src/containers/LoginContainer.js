import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "../components/Login";
import { Auth } from 'aws-amplify';
const useHistory = require("react-router-dom").useHistory;

const LoginContainer = (props) => {
  const [isAuth, setAuth] = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isSignup = props.match.path === "/signup"

  const onSubmitHandler = async (e) =>  {
    //Authenticate and then redirect
    e.preventDefault();

    setIsLoading(true)

    setErrorMessage("");
    setHasError(false);
    setAuth(false);

    if(email.length === 0 || password.length === 0){
      setErrorMessage("You must supply a User Id and password");
      setHasError(true);
      setIsLoading(false)
      return;
    }

    if (isSignup && password.length > 0 && password !== confirmPassword){
      setErrorMessage("The passwords do not match. Please ensure both passwords are the same.");
      setHasError(true);
      setIsLoading(false)
      return;
    }
    try {
			await Auth.signIn(email, password);
      setAuth(true);
      setIsLoading(false)
      history.push("/home");
		} catch (e) {
      setErrorMessage("Cannot authenticate: " + e.message.replace("$", "") );
      setHasError(true);
      setIsLoading(false)
		}

  };

  const onChangeHandler = (e) => {
    setErrorMessage("");
    setHasError(false);
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
    case "confirm-password":
        setConfirmPassword(e.target.value)
        break;
      default:
        console.log("invalid field onChange (Login) ...", e.target.id)
        break;
    }
  };

  return (
    <Login
      signup={isSignup}
      onSubmit={onSubmitHandler}
      errorMessage={errorMessage}
      hasError={hasError}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      onChange={onChangeHandler}
      isLoading={isLoading}
    />
  );
};

export default LoginContainer;
