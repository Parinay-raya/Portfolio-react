import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import "./Techstack.css"; 


function Techstack() {
  return (
    <>
      {/* First Row - 4 items */}
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <p>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <p>Node.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <p>React.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <p>MongoDB</p>
        </Col>
      </Row>

      {/* Second Row - 3 items */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
          <p>Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
          <p>Firebase</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
          <p>Java</p>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
