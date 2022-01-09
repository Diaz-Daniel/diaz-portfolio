import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Portfolio = () => {
  return (
    <Container>
      <div>
        <h1>Portfolio</h1>
      </div>
      <Row>
        <Col>
          <a href="#" className="career">
            <div>
              <p>Project 1</p>
            </div>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" className="rowTwo workTwo">
            <div>
              <p>Project 2</p>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#" className="rowTwo workThree">
            <div>
              <p>Project 3</p>
            </div>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" className="rowTwo workTwo">
            <div>
              <p>Project 2</p>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#" className="rowTwo workThree">
            <div>
              <p>Project 3</p>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Portfolio;
