import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  return (
    <div className="App" id="page-container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div id="content-wrap">{renderPage()}</div>
      <Footer />
    </div>
  );
};

export default App;
