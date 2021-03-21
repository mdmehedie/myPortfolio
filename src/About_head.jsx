import React from "react";
import ReactDom from "react-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function About_head() {
  return (
    <div className="bg-white py-5">
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col className="order-2 order-lg-1">
            <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
            <p className="font-italic text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className="btn-light px-5 rounded shadow-sm">
              Learn More
            </Button>
          </Col>
          <Col lg="5" className="px-5 mx-auto order-1 order-lg-2">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-2_vdgqgn.jpg"
              alt=""
              className="img-fluid mb-4 mb-lg-0"
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg="5" className="px-5 mx-auto">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-1_e25nvh.jpg"
              alt=""
              className="img-fluid mb-4 mb-lg-0"
            />
          </Col>
          <Col className="order-2 order-lg-1">
            <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
            <p className="font-italic text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className="btn-light px-5 rounded shadow-sm">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About_head;
