import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";

const Portfolio = () => {
  return (
    <Container>
      <div>
        <h1>Portfolio</h1>
      </div>
      <Row>
        <Col>
          <a href="https://careerconeproject.herokuapp.com/" className="career">
            <div>
              <p>Career Cone</p>
            </div>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="https://safe-shore-96091.herokuapp.com/notes"
            className="rowTwo workTwo"
          >
            <div>
              <p>Note Taker</p>
            </div>
          </a>
        </Col>
        <Col>
          <a
            href="https://diaz-daniel.github.io/Quick_Calendar/"
            className="rowTwo workThree"
          >
            <div>
              <p>Work Day Scheduler</p>
            </div>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="https://diaz-daniel.github.io/Coding_Quiz/"
            className="rowTwo workTwo"
          >
            <div>
              <p>Coding Quiz</p>
            </div>
          </a>
        </Col>
        <Col>
          <a
            href="https://diaz-daniel.github.io/Random_Code/"
            className="rowTwo workThree"
          >
            <div>
              <p>Password Generator</p>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Portfolio;
