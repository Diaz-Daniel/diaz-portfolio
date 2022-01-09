import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
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
