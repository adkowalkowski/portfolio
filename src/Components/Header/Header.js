import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar sticky="top" bg="white" collapseOnSelect expand="sm">
        <Container>
          <Nav>
            <Navbar.Brand as={Link} to="/">
              <img
                src={require("../assets/anthony_headshot.png")}
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
            <NavDropdown.Item className='dropdown-desktop' as={Link} to="/about">
              ABOUT
            </NavDropdown.Item>
            <NavDropdown.Item className='dropdown-desktop' as={Link} to="/projects">
              PROJECTS
            </NavDropdown.Item>
            <NavDropdown.Item className='dropdown-desktop' as={Link} to="/contact">
              CONTACT
            </NavDropdown.Item>
          </Nav>
          </Navbar.Collapse>
          
        </Container>
        <hr></hr>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Header;
