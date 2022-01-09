import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Image of Daniel Diaz"
              src="https://lh3.googleusercontent.com/-cN4TziF2dslRa_G_dUIqNY9bRr7oeIXyNSOTntdDTgx3iUsucTXhu7idHMrJOYXGQkPpetY-bMlN_LHUY6FburOVvxfR31Z6Mc7v25x6OrT_Q0GR7nBwK5YnMFl8Asah5LzqIy220YWBBnv9w-JjTWQd-uUAWEFSY-gIyatpMKpzsPP533UtbVnG4NZFfbJ-tmfR_QMKqYtKCfAUk584xEirqXbwGUXqH8API8dtSozjmIaSk6K59ldlR7h5GVyO96Z9xTAEaMdX3Zqa70KgPJ5Uj23LepV-ORlVEof9Z-THr0IFWXlJkd3c_XmZrXH64RxdwXUc478b4-KJojHB6pNW3TByI5-ELADuCAShVuv2RCkgbHurCzHJUkxdsvCeaKR9pSqdezHg8E_-8a7aCfBI9cIjyyoGZJm_Zo-sS98tn_ZHOKaAOSYd45IAO4zuuV6FbdiZ9M-cnJjPpSimWp5Lol3MR7mrXIfga2j9071c1ycWsDq58gU8hbv_rWWBfdQEMnHQ7vuF-Q76yT9uUEI9gXWkdX21z1qiyjHPwc5QZyWr-p82PvIHMTEQTKTkOSC1Az9HIWnRL5rtLFaeIYqAmlCzA7aU9ZsP0qVy_WXK_Eb6rfjp8TxVPAHsw3WR9SnzDI0vZFWasAtuy2kJj7utrXGW2TyWa-eMwfYttQSkA-wzANcb63JeEHkdWA4FzLfuKhLaMbSYr5aKoTOjH7psg=w276-h450-no?authuser=0"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
            Daniel Diaz
          </Navbar.Brand>

          <Nav>
            <Nav.Link onClick={() => props.setCurrentPage("About")}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => props.setCurrentPage("Project")}>
              Project
            </Nav.Link>
            <Nav.Link onClick={() => props.setCurrentPage("Resume")}>
              Resume
            </Nav.Link>
            <Nav.Link onClick={() => props.setCurrentPage("Contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
