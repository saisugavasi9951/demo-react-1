import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'react-bootstrap';
import LoadingButton from '../LoadingBtn/LoadingBtn';
import './header.css';

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
                Plans
              </Button>
              <Offcanvas show={show} onHide={toggleOffcanvas} placement="end">
                <OffcanvasHeader closeButton>
                  <Offcanvas.Title>Our Subscription Plans</Offcanvas.Title>
                </OffcanvasHeader>
                <OffcanvasBody>
                  <strong>Basic Plan</strong>
                  <ul>
                    <li>Price: $9.99/month</li>
                    <li>Benefits</li>
                    <ul>
                        <li>Access to basic features</li>
                        <li>Monthly newsletter</li>
                        <li>Community support</li>
                    </ul>
                  </ul>
                  <strong>Pro Plan</strong>
                  <ul>
                    <li>Price: $19.99/month</li>
                    <li>Benefits</li>
                    <ul>
                        <li>All features of the Basic Plan</li>
                        <li>Priority customer support</li>
                        <li>Access to premium content</li>
                        <li>Monthly webinars with industry experts</li>
                    </ul>
                  </ul>
                  <LoadingButton />
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