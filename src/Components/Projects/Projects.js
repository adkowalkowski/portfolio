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
        <Card.Img 
          variant="bottom"
          src={require("../assets/studio_ghiblist.png")}
          height="350"
        />
        <Card.Body>
          <Card.Title>LOVE LANGUAGE DIRECTORY</Card.Title>
          <Card.Text>
            While at General Assembly, I was tasked to create an application
            using React.js and a third party API. Utilizing state, lifecycles,
            hooks, and Router with React, along with fetch requests, I created a
            fully functioning, responsive web application in which users can
            view information about Studio Ghibli movies and create a watchlist
            with those movies.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
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
            using React.js and a third party API. Utilizing state, lifecycles,
            hooks, and Router with React, along with fetch requests, I created a
            fully functioning, responsive web application in which users can
            view information about Studio Ghibli movies and create a watchlist
            with those movies.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </div>
        
      
        </div>
      
      </div>
      
  );
};

export default Projects;
