import React from "react";
import NavBar from "../NavBar/NavBar";
const Header = (props) => {
  return (
    <section className="header">
      <NavBar {...props} />
    </section>
  );
};

export default Header;
