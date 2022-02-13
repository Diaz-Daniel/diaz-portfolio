import React from "react";
import NavBar from "../navbar/Navbar";
const Header = (props) => {
  return (
    <section className="header">
      <NavBar {...props} />
    </section>
  );
};

export default Header;
