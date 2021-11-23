import React from "react";
import { SocialIcon } from 'react-social-icons';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import './style.css'

function Footer() {
  return (
    <Nav className="justify-content-center footer">
      <Row>
        <Col >
          <Nav.Item >
            <p className="footer-item">juanjoramirezps@gmail.com</p>
          </Nav.Item>
          <Nav.Item>
            <p className="footer-item">(206)-637-9161</p>
          </Nav.Item>
          <Nav.Item>
            <p className="footer-item">Mercer Island, WA</p>
          </Nav.Item>
        </Col>
        <Col md="auto icon">
          <Nav.Item>
            <SocialIcon url="https://github.com/JuanjoRamirez262" />
          </Nav.Item>
        </Col>
        <Col md="auto icon">
          <Nav.Item>
            <SocialIcon url="https://www.linkedin.com/in/juanjoseramirezp/?locale=en_US" />
          </Nav.Item>
        </Col>
      </Row >
    </Nav>
  )
}

export default Footer;