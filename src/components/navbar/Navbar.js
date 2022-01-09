import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Daniel Diaz</Navbar.Brand>

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
