import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shopnest from "../../Assets/Projects/Shopnest.png";
import elebill from "../../Assets/Projects/Elebill.png";
import atm from "../../Assets/Projects/ATM_Interface.png";
import furniro from "../../Assets/Projects/Furniro.png";
import portfolio from "../../Assets/Projects/Portfolio.png";
import todolist from "../../Assets/Projects/TodoList.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopnest} // replace with the actual imported image variable for ShopNest
              isBlog={false}
              title="ShopNest"
              description="A full-stack e-commerce web application built with the MERN stack. ShopNest features user authentication, product listings, a secure cart and checkout system, and a clean, responsive UI designed with HTML, CSS, and JavaScript."
              ghLink="https://github.com/Parinay-raya/Shop-nest"
              demoLink="https://shopnestweb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furniro} // replace with the actual imported image variable for Furniro
              isBlog={false}
              title="Furniro"
              description="An elegant online furniture store website built using HTML, CSS, and JavaScript. Furniro features a clean user interface with product listings, categories, and a responsive design suitable for all screen sizes."
              ghLink="https://github.com/Parinay-raya/FOG-Task1"
              demoLink="https://fog-task1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elebill}
              isBlog={false}
              title="Ele-Bill"
              description="A simple Electricity Billing System built using HTML, CSS & JS for the frontend and Node.js + MongoDB for backend data storage. Allows admin to manage customer records, generate bills, and track electricity usage with a user-friendly GUI."
              ghLink="https://github.com/Code-Practice25/Ele-Bill"
              demoLink="https://elebill.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A modern and responsive portfolio website built using React.js and Tailwind CSS. Showcases personal projects, technical skills, and contact information with a clean UI, smooth animations, and mobile-first design. "
              ghLink="https://github.com/Parinay-raya/Portfolio-react"
              demoLink="https://parinayraya.netlify.app/" // replace with your actual live demo link
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atm} // replace with the actual imported image variable for the ATM project
              isBlog={false}
              title="ATM Interface"
              description="A Java Swing-based ATM Interface application that simulates basic banking operations such as balance inquiry, deposit, and withdrawal. Integrated with MySQL using JDBC to store and retrieve user account details securely."
              ghLink="https://github.com/Parinay-raya/CODSOFT/blob/main/Codsoft%20project/ATM_interface.java"
              demoLink="" // leave empty if no live demo is available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do List App"
              description="A simple and interactive To-Do List application built using React.js. Allows users to add, delete, and mark tasks as completed with a clean and responsive UI. Utilizes React hooks for state management and supports local storage to retain tasks between sessions."
              ghLink="https://github.com/Parinay-raya/ToDo-List_React"
              demoLink="https://parinay-todo-react.netlify.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
