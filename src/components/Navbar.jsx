import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { authContext } from "../Context/LoginContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CartWidget, UserView } from "../components";
import { useGetCategories } from "../Hooks/useGetCategories";

import "../styles/Navbar.css";

export const NavBar = () => {
  const { isLoggedIn } = useContext(authContext);
  const { categoryId } = useParams();
  const [categories] = useGetCategories(categoryId);

  return (
    <header>
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
            <Nav>
              <CartWidget />
              {isLoggedIn ? <UserView /> : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
