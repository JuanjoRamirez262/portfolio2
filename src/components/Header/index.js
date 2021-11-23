import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from '../Pages/AboutMe';
import ContactMe from '../Pages/ContactMe';
import Projects from '../Pages/Projects';
import './style.css';

function Header() {
    return (
        <>
            <Router>
                <Navbar className="navbar" expand="lg">
                    <Container>
                        <Navbar.Brand className="navbar-text" href="/">About Me</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Nav.Link className="navbar-text" href="/projects">Projects</Nav.Link>
                                <Nav.Link className="navbar-text" href="/contact-me">Contact Me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes >
                    <Route exact path="/" element={<AboutMe/>} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/contact-me" element={<ContactMe />} />
                </Routes >
            </Router>
        </>)
}

export default Header;