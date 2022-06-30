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
          <div className="career careerImg">
            <a href="https://careerconeproject.herokuapp.com/">
              <p>Career Cone</p>
            </a>
            <br></br>
            <a href="https://github.com/humkeyg/Career-Cone-1.0.git">
              <p>Source Code</p>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="notes notesImg">
            <a href="https://safe-shore-96091.herokuapp.com/notes">
              <p>Note Taker</p>
            </a>
            <br></br>
            <a href="https://github.com/Diaz-Daniel/Note_Taker.git">
              <p>Source Code</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="schedulerTracker schedulerImg">
            <a href="https://diaz-daniel.github.io/Quick_Calendar/">
              <p>Work Day Scheduler</p>
            </a>
            <br></br>
            <a href="https://github.com/Diaz-Daniel/Quick_Calendar.git">
              <p>Source Code</p>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="codingQuiz codingImg">
            <a href="https://diaz-daniel.github.io/Coding_Quiz/">
              <p>Coding Quiz</p>
            </a>
            <br></br>
            <a href="https://github.com/Diaz-Daniel/Coding_Quiz.git">
              <p>Source Code</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="pswd pswdImg">
            <a href="https://diaz-daniel.github.io/Random_Code/">
              <p>Password Generator</p>
            </a>
            <br></br>
            <a href="https://github.com/Diaz-Daniel/Random_Code.git">
              <p>Source Code</p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Portfolio;
