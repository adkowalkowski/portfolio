import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import './Header.css'

const Header = () => {
  
  return (
    <div className='header-container'>
      <Navbar sticky="top" bg="white">
        <Container>
          <Nav >
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
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
