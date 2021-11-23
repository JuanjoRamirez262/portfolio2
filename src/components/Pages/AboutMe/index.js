import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import profile from './FotoPerfil.jpeg'
import Container from 'react-bootstrap/Container'
import './style.css';

function AboutMe() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col  sm={8}>
                    <h1 className="headers1">Juan Jose Ramirez Puyol</h1>
                    <h2 className="headers2">Full-Stack Web Developer</h2>
                    <h2 className="headers2">B.S. in Electrical Engineering</h2>
                </Col>
                <Col sm={4} >
                    <Image className="profile-picture" src={profile} roundedCircle />
                </Col>
            </Row>
            <div className="about-me">
                <p>
                    Full-stack web developer with a B.S. in electrical engineering, and a minor in computer science. Recently earned a certificate in full-stack development from the University of Washington, with skills in React.js, JavaScript, Python and Node.js. Known as an innovative problem solver passionate about developing efficient solutions to problems. Knowledge in algorithms and data structure. With each project, my aim is to be a team collaborator but focus on developing smart solutions adapting to team criteria. I applied aspects of agile development in a recent project. Interested in learning new technologies, coachable, and a good team player.
                </p>
            </div>
        </Container>
    )
}

export default AboutMe;