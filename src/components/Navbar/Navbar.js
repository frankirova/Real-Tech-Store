import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import UserView from '../UserView/UserView';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className='link' to='/'><Navbar.Brand className='navbar-brand'>RealTech Store</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='link' to="/category/Notebooks">Notebooks</NavLink>
            <NavLink className='link' to="/category/Celulares">Celulares</NavLink>
            <NavLink className='link' to="/category/Tablets">Tablets</NavLink>

          </Nav>
        </Navbar.Collapse>
        <UserView />
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;