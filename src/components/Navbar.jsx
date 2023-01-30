import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../Context/LoginContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CartWidget } from "../components";
import { UserView } from "../components";

import "../styles/Navbar.css";

export const NavBar = () => {
  const { isLoggedIn } = useContext(authContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="link" to="/">
          <Navbar.Brand className="navbar-brand">RealTech Store</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="link" to="/category/Notebooks">
              Notebooks
            </NavLink>
            <NavLink className="link" to="/category/Celulares">
              Celulares
            </NavLink>
            <NavLink className="link" to="/category/Tablets">
              Tablets
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {isLoggedIn ? <UserView /> : <></>}
        <CartWidget />
      </Container>
    </Navbar>
  );
};
