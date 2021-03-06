import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import './style.css';
import bird from './images/bird.jpeg'
import hero from './images/hero.png'
import triptinerary from './images/background-compressed2.jpg'

function Projects() {
    const projects = [
        {
            image: triptinerary,
            title: 'Triptinerary',
            deployedUrl: 'https://triptinerary.herokuapp.com/',
            repoUrl: 'https://github.com/Triptinerary/travel-app',
            description: 'Place for “travelpreneurs” to exclusively share their travel experiences, monetize them, and build their brand. In this project, I build the back-end, using MongoDB and Express.js, to handle the controllers.'
        },
        {
            image: bird,
            title: 'Birds Eye View',
            deployedUrl: 'https://abirdseyeview.herokuapp.com/',
            repoUrl: 'https://github.com/JuanjoRamirez262/birdsblog',
            description: 'A web application design to post birds sightings. Created using Node.js, Express.js, MySQL and Bootstraps'
        },
        {
            image: hero,
            title: 'Regional Holiday Calendar',
            deployedUrl: 'https://lemelisk27.github.io/country-holiday/',
            repoUrl: 'https://github.com/Lemelisk27/country-holiday',
            description: 'This code was created to know the situation in which the different countries are regarding the cases of covid-19. The national holidays of each country are also shown, so with this information, to be able to make a wise decision when traveling to a country.'
        },
        // {
        //     image: '#',
        //     title: '',
        //     deployedUrl: '',
        //     repoUrl: '',
        //     // description: ''
        // },
        // {
        //     image: '#',
        //     title: '',
        //     deployedUrl: '',
        //     repoUrl: '',
        //     // description: ''
        // }
    ]
    return (
        <Container>
            <Container className="card-container justify-content-center">
                {projects.map((project, index) => (
                    <Card bg="light" key={index} text="dark" className="card">
                        <Card.Img className="project-image" variant="top" src={project.image} />
                        <Card.Body className="card-body">
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Card.Link href={project.deployedUrl}>Deployed app link</Card.Link>
                            <Card.Link href={project.repoUrl}>Repo link</Card.Link>
                        </Card.Body>
                    </Card>
                )
                )}
            </Container>
        </Container>
    )
}

export default Projects