import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import JSA from '../assets/JSAtext.svg';
import BUJSA from '../assets/BUJSAtext.svg';

import { useState, useEffect } from 'react';
import axios from 'axios';

function NavbarComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/protected', { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setIsLoggedIn(false);
        }
        console.log(isLoggedIn);
      });
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ fontFamily: 'Arial Rounded MT Bold' }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={BUJSA}
            width="80"
            height="30"
            className="d-inline-block align-middle logo"
            alt="Logo"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            <Nav.Link href="/events">EVENTS</Nav.Link>
            <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.bu.edu/wll/undergraduate/languages/japanese/">BU JAPANESE LANGUAGE DEPARTMENT</NavDropdown.Item>
              <NavDropdown.Item href="https://forms.gle/r9HharKTYJV71hkD7">CAREERS IN JAPAN</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://bu.campuslabs.com/engage/organization/japanese-student-association">TERRIER CENTRAL (BU ENGAGE)</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Nav className="ml-auto">
            {!isLoggedIn && <Button variant="outline-success" href="http://localhost:5000/auth/google">Login</Button>}
            {isLoggedIn && <Button variant="outline-danger" href="http://localhost:5000/auth/logout">Logout</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;