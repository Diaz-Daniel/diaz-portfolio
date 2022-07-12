import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Project.css";

// const Portfolio = () => {
//   return (
//     <Container>
//       <div>
//         <h1>Portfolio</h1>
//       </div>
//       <Row>
//         <Col>
//           <div className="career careerImg">
//             <a href="https://careerconeproject.herokuapp.com/">
//               <p>Career Cone</p>
//             </a>
//             <br></br>
//             <a href="https://github.com/humkeyg/Career-Cone-1.0.git">
//               <p>Source Code</p>
//             </a>
//           </div>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <div className="notes notesImg">
//             <a href="https://safe-shore-96091.herokuapp.com/notes">
//               <p>Note Taker</p>
//             </a>
//             <br></br>
//             <a href="https://github.com/Diaz-Daniel/Note_Taker.git">
//               <p>Source Code</p>
//             </a>
//           </div>
//         </Col>
//         <Col>
//           <div className="schedulerTracker schedulerImg">
//             <a href="https://diaz-daniel.github.io/Quick_Calendar/">
//               <p>Work Day Scheduler</p>
//             </a>
//             <br></br>
//             <a href="https://github.com/Diaz-Daniel/Quick_Calendar.git">
//               <p>Source Code</p>
//             </a>
//           </div>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <div className="codingQuiz codingImg">
//             <a href="https://diaz-daniel.github.io/Coding_Quiz/">
//               <p>Coding Quiz</p>
//             </a>
//             <br></br>
//             <a href="https://github.com/Diaz-Daniel/Coding_Quiz.git">
//               <p>Source Code</p>
//             </a>
//           </div>
//         </Col>
//         <Col>
//           <div className="pswd pswdImg">
//             <a href="https://diaz-daniel.github.io/Random_Code/">
//               <p>Password Generator</p>
//             </a>
//             <br></br>
//             <a href="https://github.com/Diaz-Daniel/Random_Code.git">
//               <p>Source Code</p>
//             </a>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

const Portfolio = () => {
  return (
    <Container>
      <div>
        <h1>Portfolio</h1>
      </div>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              className="notes notesImg"
              alt="Screen Shot of Note Taker Start Screen"
            />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
                When you're moving at the speed of life, this note taking app
                will help you get through every day. Never forget antother task!
              </Card.Text>
              <a
                class="btn btn-secondary"
                variant="dark"
                href="https://safe-shore-96091.herokuapp.com/notes"
                role="button"
              >
                Project
              </a>
              <a
                class="btn btn-secondary"
                variant="dark"
                href="https://github.com/Diaz-Daniel/Note_Taker.git"
              >
                Github
              </a>
            </Card.Body>{" "}
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              className="schedulerTracker schedulerImg"
              alt="Screen Shot of Quick Calendar"
            />
            <Card.Body>
              <Card.Title>Quick Calendar</Card.Title>
              <Card.Text>
                Big appointments or small reminders, this application will keep
                you on track during your day.
              </Card.Text>
              <a
                class="btn btn-secondary"
                variant="dark"
                href="https://diaz-daniel.github.io/Quick_Calendar/"
                role="button"
              >
                Project
              </a>
              <a
                class="btn btn-secondary"
                variant="dark"
                href="https://github.com/Diaz-Daniel/Quick_Calendar.git"
              >
                Github
              </a>
            </Card.Body>{" "}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              className="codingQuiz codingImg"
              alt="Screen Shot of Coding Quiz Start Page"
            />
            <Card.Body>
              <Card.Title>Coding Quiz</Card.Title>
              <Card.Text>
                There's a lot to remember when learning to code. Use the Coding
                Quiz as a guide to help you stay on top of your learning!
              </Card.Text>
              <a
                class="btn btn-secondary"
                variant="dark"
                href="https://diaz-daniel.github.io/Coding_Quiz/"
                role="button"
              >
                Project
              </a>
              <a
                class="btn btn-secondary"
                variant="dark"
                href="https://github.com/Diaz-Daniel/Coding_Quiz.git"
                role="button"
              >
                Github
              </a>
            </Card.Body>{" "}
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              className="pswd pswdImg"
              alt="Screen Shot of Passwork Generator Page"
            />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
                With so many new accounts being created day to day, this
                password generator will help keep your information safe.
              </Card.Text>
              <a
                class="btn btn-secondary"
                variant="dark"
                href="https://diaz-daniel.github.io/Random_Code/"
                role="button"
              >
                Project
              </a>
              <a
                class="btn btn-secondary"
                variant="dark"
                href="https://github.com/Diaz-Daniel/Random_Code.git"
                role="button"
              >
                Github
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Portfolio;
