import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
