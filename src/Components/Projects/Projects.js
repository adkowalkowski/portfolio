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
          src={require("../assets/love_landing_page.png")}
          height="350"
        />
        <Card.Body>
          <Card.Title>LOVE LANGUAGE DIRECTORY</Card.Title>
          <Card.Text>
            My full-stack, capstone project for General Assembly — built with Django, PostgreSQL, and React.js. Featuring fully functioning user authentication, users can create an account, add their top 5 love languages to our directory's database, and search the directory for other user's top 5 love languages. To learn more, visit the Github repository.
          </Card.Text>
          <Button variant="primary">Visit the Love Language Directory</Button>
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
            using React.js and a third party API. I developed a
            fully functioning, responsive web application in which users can
            view information about Studio Ghibli movies and create a watchlist
            with those movies.
          </Card.Text>
          <a target='_blank' href='https://adkowalkowski.github.io/react-api-studio-ghiblist/'>
          <Button variant="primary">Visit Studio Ghiblist</Button>
        </a>
          
        </Card.Body>
      </Card>
        </div>
        
      
        </div>
      
      </div>
      
  );
};

export default Projects;
