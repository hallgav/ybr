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
      <Navbar staticTop inverse className="bg-light justify-content-between" expand="lg">
        <Navbar.Header>
          <Navbar.Brand>{props.heading}</Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem>
            <PageNavButtons
              isLoggedIn={isAuth}
              onClickLogIn={onLogInClickHandler}
              onClickLogOut={onLogOutClickHandler}
              onClickSignUp={onSignUpClickHandler}
              history={history}
            />
          </NavItem>
        </Nav>
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
      <Button onClick={onClickLogOut} variant="outline-light" bsSize="sm">
        Logout
      </Button>
    );
  } else {
    if (
      history.location.pathname === "/" ||
      history.location.pathname === "/login"
    ) {
      return (
        <Button onClick={onClickSignUp} variant="outline-light" bsSize="sm">
          Signup
        </Button>
      );
    }
    return (
      <div className="nav-bar-auth">
        <Button onClick={onClickSignUp} variant="outline-light" bsSize="sm">
          Signup
        </Button>
        <Button onClick={onClickLogIn} variant="outline-light" bsSize="sm">
          Login
        </Button>
      </div>
    );
  }
};

export default PageNav;
