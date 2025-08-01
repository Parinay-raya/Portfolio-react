import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  // SiSlack,
  SiVercel,
  // SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visualstudio</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>

      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p>Vercel</p>

      </Col>
    </Row>
  );
}

export default Toolstack;
