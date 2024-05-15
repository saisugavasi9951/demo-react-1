import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'react-bootstrap';

function Header() {
  // State to manage the visibility of the Offcanvas
  const [show, setShow] = useState(false);

  // Toggle function to open and close the Offcanvas
  const toggleOffcanvas = () => setShow(!show);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <div>
              <Button variant="primary" onClick={toggleOffcanvas}>
                Open
              </Button>
              <Offcanvas show={show} onHide={toggleOffcanvas} placement="end">
                <OffcanvasHeader closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </OffcanvasHeader>
                <OffcanvasBody>
                  <strong>This is the Offcanvas body.</strong>
                </OffcanvasBody>
              </Offcanvas>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;