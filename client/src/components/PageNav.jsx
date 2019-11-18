import React, { useContext } from "react";
import "./PageNav.css";
import { UserContext } from "../contexts/UserContext";
const Navbar = require("react-bootstrap").Navbar;
const Nav = require("react-bootstrap").Nav;
const NavItem = require("react-bootstrap").NavItem;
const Button = require("react-bootstrap").Button;
const useHistory = require("react-router-dom").useHistory;

const PageNav = props => {
  const history = useHistory();
  const [isAuth, setAuth] = useContext(UserContext);

  const onLogInClickHandler = () => {
    history.push("/login");
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
        staticTop
        inverse
        className="bg-light justify-content-between"
        expand="lg"
      >
        <Navbar.Header>
          <Navbar.Brand>{props.heading}</Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem>
            <PageNavButtons
              onClickLogIn={onLogInClickHandler}
              onClickLogOut={onLogOutClickHandler}
              onClickSignUp={onSignUpClickHandler}
              {...props}
            />
          </NavItem>
        </Nav>
      </Navbar>
      {props.children}
    </div>
  );
};

const PageNavButtons = ({
  onClickLogIn,
  onClickLogOut,
  onClickSignUp,
  showLogIn,
  showSignUp,
  showLogOut
}) => {
  console.log( "show buttons" + showLogIn)
  return (
    <div className="nav-bar-auth">
      {showLogIn ? LoginButton(onClickLogIn) : null}
      {showSignUp ? SignupButton(onClickSignUp) : null}
      {showLogOut ? LogoutButton(onClickLogOut) : null}
    </div>
  );
};

export default PageNav;

const LoginButton = onClickLogIn => {
  return (
    <Button onClick={onClickLogIn} variant="outline-light" bsSize="sm">
      Login
    </Button>
  );
};

const SignupButton = onClickSignUp => {
  return (
    <Button onClick={onClickSignUp} variant="outline-light" bsSize="sm">
      Signup
    </Button>
  );
};

const LogoutButton = onClickLogOut => {
  return (
    <Button onClick={onClickLogOut} variant="outline-light" bsSize="sm">
      Logout
    </Button>
  );
};
