import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Footer = () => {
  return (
    <footer>
      <Container bg="dark" variant="dark " fixed="bottom">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <a href="https://github.com/Diaz-Daniel">Github</a>
          </Col>
          <Col md="auto">
            <a href="http://www.linkedin.com/in/daniel-diaz-wd">LinkedIn</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
