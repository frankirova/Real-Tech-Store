import { useContext, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../Context/LoginContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CartWidget, UserView } from "../components";

import "../styles/Navbar.css";
import { ProdContext } from "../Context/ProdContext";

export const NavBar = () => {
  const { isLoggedIn } = useContext(authContext);
  const { prod } = useContext(ProdContext);

  const categories = useMemo(() => {
    const buffer = new Set();
    prod.map((prod) => {
      buffer.add(prod.categoria);
    });
    return Array.from(buffer);
  }, [prod]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="text-success" to="/">
          <Navbar.Brand className="navbar-brand">RealTech Store</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {categories.map((categorie) => (
              <NavLink
                className="link"
                to={`/category/${categorie}`}
                key={categorie}
              >
                {categorie}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
        {isLoggedIn ? <UserView /> : null}
        <CartWidget />
      </Container>
    </Navbar>
  );
};
