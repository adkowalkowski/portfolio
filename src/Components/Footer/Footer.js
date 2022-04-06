import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import './Footer.css'
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  
  return (
    <div className='footer'>
      <Navbar className='footer-container' fixed='bottom' bg="white">
        <Container>
          <Nav></Nav>
          <Nav>
          <Nav.Item>
              <a target='_blank' href="https://www.linkedin.com/in/anthony-kowalkowski/"><FaLinkedinIn /></a>
            </Nav.Item>
            <Nav.Item>
            <a target='_blank' href="https://github.com/adkowalkowski"><FaGithub /></a>
            </Nav.Item>
            <Nav.Item as={Link} to="/contact">
              <FaEnvelope />
            </Nav.Item>
          </Nav>
        </Container>
        <hr></hr>
      </Navbar>
      <div>
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes> */}
      </div>
    </div>
  );
};

export default Footer;