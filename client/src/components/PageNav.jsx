import React, { useContext } from "react";
import "./PageNav.css";
import { UserContext } from "../contexts/UserContext";
const Navbar = require("react-bootstrap").Navbar;
const Button = require("react-bootstrap").Button;
const useHistory = require("react-router-dom").useHistory;

const PageNav = props => {
  const history = useHistory();
  const [isAuth, setAuth] = useContext(UserContext);

  const onLogInClickHandler = () => {
    history.push("/");
  };

  const onLogOutClickHandler = () => {
    setAuth(false);
    history.push("/");
  };

  const onSignUpClickHandler = () => {
    setAuth(false);
    history.push("/signup");
  };
  return (
    <div className="page-nav">
      <Navbar
        bg="dark"
        variant="dark"
        className="bg-light justify-content-between"
        expand="lg"
      >
        <Navbar.Brand>{props.heading}</Navbar.Brand>
        <PageNavButtons
          isLoggedIn={isAuth}
          onClickLogIn={onLogInClickHandler}
          onClickLogOut={onLogOutClickHandler}
          onClickSignUp={onSignUpClickHandler}
          history={history}
        />
      </Navbar>
      {props.children}
    </div>
  );
};

const PageNavButtons = ({
  isLoggedIn,
  onClickLogIn,
  onClickLogOut,
  onClickSignUp,
  history
}) => {
  if (isLoggedIn) {
    return (
      <Button onClick={onClickLogOut} variant="outline-light" size="sm">
        Logout
      </Button>
    );
  } else {
    if (
      history.location.pathname === "/" ||
      history.location.pathname === "/login"
    ) {
      return (
        <Button onClick={onClickSignUp} variant="outline-light" size="sm">
          Signup
        </Button>
      );
    }
    return (
      <div className="nav-bar-auth">
        <Button onClick={onClickSignUp} variant="outline-light" size="sm">
          Signup
        </Button>
        <Button onClick={onClickLogIn} variant="outline-light" size="sm">
          Login
        </Button>
      </div>
    );
  }
};

export default PageNav;
