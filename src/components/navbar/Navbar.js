const NavBar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => props.setCurrentPage("About")}>
            <a href="#about">About Me</a>
          </li>
          <li onClick={() => props.setCurrentPage("Project")}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => props.setCurrentPage("Resume")}>
            <a href="#resume">Resume</a>
          </li>
          <li onClick={() => props.setCurrentPage("Contact")}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
