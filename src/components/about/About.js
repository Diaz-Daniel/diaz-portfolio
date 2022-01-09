import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            alt="Image of Daniel Diaz"
            src="https://lh3.googleusercontent.com/-cN4TziF2dslRa_G_dUIqNY9bRr7oeIXyNSOTntdDTgx3iUsucTXhu7idHMrJOYXGQkPpetY-bMlN_LHUY6FburOVvxfR31Z6Mc7v25x6OrT_Q0GR7nBwK5YnMFl8Asah5LzqIy220YWBBnv9w-JjTWQd-uUAWEFSY-gIyatpMKpzsPP533UtbVnG4NZFfbJ-tmfR_QMKqYtKCfAUk584xEirqXbwGUXqH8API8dtSozjmIaSk6K59ldlR7h5GVyO96Z9xTAEaMdX3Zqa70KgPJ5Uj23LepV-ORlVEof9Z-THr0IFWXlJkd3c_XmZrXH64RxdwXUc478b4-KJojHB6pNW3TByI5-ELADuCAShVuv2RCkgbHurCzHJUkxdsvCeaKR9pSqdezHg8E_-8a7aCfBI9cIjyyoGZJm_Zo-sS98tn_ZHOKaAOSYd45IAO4zuuV6FbdiZ9M-cnJjPpSimWp5Lol3MR7mrXIfga2j9071c1ycWsDq58gU8hbv_rWWBfdQEMnHQ7vuF-Q76yT9uUEI9gXWkdX21z1qiyjHPwc5QZyWr-p82PvIHMTEQTKTkOSC1Az9HIWnRL5rtLFaeIYqAmlCzA7aU9ZsP0qVy_WXK_Eb6rfjp8TxVPAHsw3WR9SnzDI0vZFWasAtuy2kJj7utrXGW2TyWa-eMwfYttQSkA-wzANcb63JeEHkdWA4FzLfuKhLaMbSYr5aKoTOjH7psg=w276-h450-no?authuser=0"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            I am currently a Fleet Engineer for a Seattle based company. I
            worked as a deckhand for two seasons and then transitioned to the
            Engineering team. While the work can sometimes be dirty, and the
            issues diverse as they involve different boating systems; I have
            found process of problem solving to be the most enjoyable part of my
            job. From quick fixes to complex interconnected systems issues, the
            process of problem solving remains the same. Cultivating attention
            to detail and learning to ask better questions has always been an
            interest of mine.<br></br>
            Transistioning my career to web development feels seamless, because
            while the technical problems to be solved are markedly different-
            the process of finding solutions remains the same. I believe my
            projects are produced with the same attention to detail that I put
            into my current work as a Fleet Engineer.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
