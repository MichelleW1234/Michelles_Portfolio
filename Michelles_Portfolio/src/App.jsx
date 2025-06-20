import './App.css';
import Introduction from "./components/Introduction.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

function App() {

  return (
    <div>
      <Introduction/>
      <div className="extraSpace"></div>
      <Projects/>
      <div className="extraSpace"></div>
      <Skills/>
      <div className="extraSpace"></div>
      <Contact/>
    </div>
  )
}

export default App
