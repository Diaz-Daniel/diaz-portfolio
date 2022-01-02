import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
};

export default App;
