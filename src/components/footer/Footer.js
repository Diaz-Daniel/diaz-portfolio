import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <MDBFooter backgroundColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <Row className="justify-content-md-center">
          <Col md="auto">
            <a href="https://github.com/Diaz-Daniel">Github</a>
          </Col>
          <Col md="auto">
            <a href="http://www.linkedin.com/in/daniel-diaz-wd">LinkedIn</a>
          </Col>
          <Col md="auto">
            <a href="mailto: daniel.diaz.0515@gmail.com">Email Me</a>
          </Col>
        </Row>
      </div>
    </MDBFooter>
  );
};

export default Footer;
