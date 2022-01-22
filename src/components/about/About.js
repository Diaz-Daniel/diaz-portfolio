import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./About.css";

const About = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={3} md={3}>
          <Image
            alt="Image of Daniel Diaz"
            src="https://lh3.googleusercontent.com/-cN4TziF2dslRa_G_dUIqNY9bRr7oeIXyNSOTntdDTgx3iUsucTXhu7idHMrJOYXGQkPpetY-bMlN_LHUY6FburOVvxfR31Z6Mc7v25x6OrT_Q0GR7nBwK5YnMFl8Asah5LzqIy220YWBBnv9w-JjTWQd-uUAWEFSY-gIyatpMKpzsPP533UtbVnG4NZFfbJ-tmfR_QMKqYtKCfAUk584xEirqXbwGUXqH8API8dtSozjmIaSk6K59ldlR7h5GVyO96Z9xTAEaMdX3Zqa70KgPJ5Uj23LepV-ORlVEof9Z-THr0IFWXlJkd3c_XmZrXH64RxdwXUc478b4-KJojHB6pNW3TByI5-ELADuCAShVuv2RCkgbHurCzHJUkxdsvCeaKR9pSqdezHg8E_-8a7aCfBI9cIjyyoGZJm_Zo-sS98tn_ZHOKaAOSYd45IAO4zuuV6FbdiZ9M-cnJjPpSimWp5Lol3MR7mrXIfga2j9071c1ycWsDq58gU8hbv_rWWBfdQEMnHQ7vuF-Q76yT9uUEI9gXWkdX21z1qiyjHPwc5QZyWr-p82PvIHMTEQTKTkOSC1Az9HIWnRL5rtLFaeIYqAmlCzA7aU9ZsP0qVy_WXK_Eb6rfjp8TxVPAHsw3WR9SnzDI0vZFWasAtuy2kJj7utrXGW2TyWa-eMwfYttQSkA-wzANcb63JeEHkdWA4FzLfuKhLaMbSYr5aKoTOjH7psg=w276-h450-no?authuser=0"
            width="100"
            className="profileImage"
            // height="100"
            fluid
            roundedCircle
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} md={6}>
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Web developer with a background in Engineering. I have over 15 years
            of work experience and earned my degree in philosophy at California
            State Northridge. I am completing my full stack certification
            through the University of Washington coding program focused on MERN
            stack development. <br></br>I currently work as a Fleet Engineer for
            a Seattle-based maritime company. While the work can sometimes be
            dirty and complex as they involve different boating systems, I have
            found tackling problems to be the best part of my job. From quick
            fixes to complex interconnected systems issues, the process of
            problem-solving remains the same and applies to my coding work. I
            have cultivated strong attention to detail and found unique ways to
            solve problems on boats and in code. In a recent website deployment
            project, I was the team leader and helped find solutions for every
            challenge we faced. <br></br>
            Transitioning my career to web development feels seamless because
            while the technical problems to be solved are markedly different–the
            process of finding solutions remains the same. I am looking forward
            to working at a company that promotes growth to expand my skills
            further while leveraging my experience.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
