import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "../components/Login";
import { Auth } from 'aws-amplify';
const useHistory = require("react-router-dom").useHistory;

const LoginContainer = () => {
  const [isAuth, setAuth] = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

    try {
			await Auth.signIn(email, password);
      setAuth(true);
      setIsLoading(false)
      history.push("/home");
		} catch (e) {
      setErrorMessage("Cannot authenticate " + e.message.replace("$", "") );
      setHasError(true);
      setIsLoading(false)
		}


  };

  const onSignupClickHandler = () => {
    history.push("/signup");
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
      default:
        console.log("invalid field onChange (Login) ...", e.target.id)
        break;
    }
  };

  return (
    <Login
      onSubmit={onSubmitHandler}
      errorMessage={errorMessage}
      hasError={hasError}
      email={email}
      password={password}
      onChange={onChangeHandler}
      isLoading={isLoading}
    />
  );
};

export default LoginContainer;
