import React from "react";
import NavBar from "../NavBar/NavBar";
const Header = (props) => {
  return (
    <section className="header">
      <section className="name">Name Here</section>
      <section className="navbar">
        <NavBar {...props} />
      </section>
    </section>
  );
};

export default Header;
