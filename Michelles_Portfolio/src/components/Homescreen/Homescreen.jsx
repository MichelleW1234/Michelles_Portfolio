import Introduction from "./HomescreenComponents/Introduction.jsx";
import Projects from "./HomescreenComponents/Projects.jsx";
import Skills from "./HomescreenComponents/Skills.jsx";
import Contact from "./HomescreenComponents/Contact.jsx";

import {useActiveSection} from "../../providers/ActiveSectionProvider.jsx";

import './Homescreen.css';

function Homescreen() {

  const {ActiveSection, setActiveSection} = useActiveSection();

  const nextSection = () => {

    if (ActiveSection === 2) {

      setActiveSection(0);

    } else {

      setActiveSection(prev => prev + 1);
    
    }

  }


  const prevSection = () => {

    if (ActiveSection === 0) {

      setActiveSection(2);

    } else {

      setActiveSection(prev => prev - 1);
    
    }

  }


  return (

    <>
      <div className="heading">
        <h1 className = "title"> Michelle Wee </h1>
        <div className="horizontalLine"></div>
      </div>

    <div className = "portfolioContentScreen">

      <div className="swipingContentScreen">
        <div className="sectionSwipeButtonContainer">
          <button className="sectionSwipeButton" onClick = {() => prevSection()}> &lt; Prev Section</button>
          <button className = "sectionSwipeButton" onClick = {() => nextSection()}> Next Section &gt; </button>
        </div>

        {ActiveSection === 0 ? (

          <Introduction/>

        ) : ActiveSection === 1 ?(

          <Projects/>

        ) : ActiveSection === 2 ?(

          <Skills/>

        ) : null}

      </div>

      <Contact/>
      
    </div>
    </>
  )
}

export default Homescreen
