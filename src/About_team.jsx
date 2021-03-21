import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import About_team_profile from "./About_team_profile";

function About_team() {
  return (
    <div className="bg-light py-5">
      <Container className="py-5">
        <Row className="mb-4 justify-content-center text-center">
          <Col lg={5}>
            <h2 className="display-4 font-weight-light">Project Team</h2>
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xl={4} sm={6} ClassName="mb-5">
            <About_team_profile
              name="Dr. Md. Obaidur Rahman"
              proffestion="Professor, Department of CSE, DUET, Gazipur"
              designation="Project Director"
            />
          </Col>
          <Col xl={4} sm={6} ClassName="mb-5">
            <About_team_profile
              name="Fazlul Hasan Siddique"
              proffestion="Professor & Head, Department of CSE, DUET, Gazipur"
              designation="Project Director"
            />
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col xl={4} sm={6} ClassName="mb-5">
            <About_team_profile
              name="Nasir Uddin Badal"
              proffestion="MSc in DUET"
              designation="Research Assistant"
            />
          </Col>
          <Col xl={4} sm={6} ClassName="mb-5">
            <About_team_profile
              name="Punam Chowdhury"
              proffestion="CSE Final Year"
              designation="Research Assistant"
            />
          </Col>
          <Col xl={4} sm={6} ClassName="mb-5">
            <About_team_profile
              name="Mehedi Hasan"
              proffestion="CSE Final Year"
              designation="Research Assistant"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About_team;
