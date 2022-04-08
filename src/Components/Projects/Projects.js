import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project-heading-container">
        <p className="project-heading">PROJECTS</p>
        <p className="project-paragraph-text">
          Projects and other professional work.
        </p>
      </div>
      <div className='project-cards-container'>
        <div className='row no-gutters'>
        <Card style={{ width: "25rem" }}>
        <Card.Img className='love-image'
          variant="bottom"
          src={require("../assets/love_landing_page.png")}
          height="350"
        />
        <Card.Body>
          <Card.Title>LOVE LANGUAGE DIRECTORY</Card.Title>
          <Card.Text>
            My full-stack, capstone project for General Assembly — built with Django, PostgreSQL, and React. Featuring fully functioning user authentication, users can create an account, add their top 5 love languages to our directory's database, and search the directory for other user's top 5 love languages. To learn more, visit the <a target="_blank" href="https://github.com/adkowalkowski/love-language-client">GitHub repository</a>.
          </Card.Text>
          <a target='_blank' href='https://adkowalkowski.github.io/love-language-client/'>
          <Button variant="primary">Visit the Love Language Directory</Button>
        </a>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="bottom"
          src={require("../assets/studio_ghiblist.png")}
          height="350"
        />
        <Card.Body>
          <Card.Title>STUDIO GHIBLIST</Card.Title>
          <Card.Text>
            While at General Assembly, I was tasked to create an application
            using React and a third party API. I developed a
            fully functioning, responsive web application in which users can
            view information about Studio Ghibli movies and create a watchlist
            with those movies. To learn more, visit the <a target="_blank" href="https://github.com/adkowalkowski/react-api-studio-ghiblist">GitHub repository</a>.
          </Card.Text>
          <a target='_blank' href='https://adkowalkowski.github.io/react-api-studio-ghiblist/'>
          <Button variant="primary">Visit Studio Ghiblist</Button>
        </a>
          
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="bottom"
          src={require("../assets/i-track.png")}
          height="350"
        />
        <Card.Body>
          <Card.Title>iTRACK</Card.Title>
          <Card.Text>
            A MERN (MongoDB, Express.js, React, Node.js) application developed in an agile environment with three other developers. Users can add, delete, or edit departments to better understand the structure of their organization. To learn more, visit the <a target="_blank" href="https://github.com/i-track">GitHub repository</a>.
          </Card.Text>
          <a target='_blank' href='https://i-track.github.io/front-end/'>
          <Button variant="primary">Visit iTrack</Button>
        </a>
          
        </Card.Body>
      </Card>
        </div>
        
      
        </div>
      
      </div>
      
  );
};

export default Projects;
