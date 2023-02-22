import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaShoppingBag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            Aech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="bg-light" id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <FaShoppingBag />
              </Nav.Link>
              <Nav.Link>
                <CgProfile />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
