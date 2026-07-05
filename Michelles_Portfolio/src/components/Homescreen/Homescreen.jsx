import {useState} from "react";

import Introduction from "./HomescreenComponents/Introduction.jsx";
import Projects from "./HomescreenComponents/Projects.jsx";
import Skills from "./HomescreenComponents/Skills.jsx";
import TechStack from "./HomescreenComponents/TechStack.jsx";
import Contact from "./HomescreenComponents/Contact.jsx";

import {useActiveSection} from "../../providers/ActiveSectionProvider.jsx";

import './Homescreen.css';

function Homescreen() {

  const {ActiveSection, setActiveSection} = useActiveSection();

  
  return (

    <>

      <div className="heading">
        <div className="projectTitleIconContainer">
          <h1 className = "title"> Michelle Wee </h1>
        </div>
        <div className="horizontalLine"></div>
      </div>

      <div className = "portfolioContentScreen">

        <div className="swipingContentScreen">
          
          <div className="navContainer">
            <button className={ActiveSection === 0 ? "navButtonActive" : "navButton"} onClick = {() => setActiveSection(0)}> Introduction </button>
            <button className={ActiveSection === 1 ? "navButtonActive" : "navButton"} onClick = {() => setActiveSection(1)}> Projects </button>
            <button className={ActiveSection === 2 ? "navButtonActive" : "navButton"} onClick = {() => setActiveSection(2)}> Skills </button>
            <button className={ActiveSection === 3 ? "navButtonActive" : "navButton"} onClick = {() => setActiveSection(3)}> Tech Stack </button>
          </div>

          {ActiveSection === 0 ? (

            <Introduction/>

          ) : ActiveSection === 1 ?(

            <Projects/>

          ) : ActiveSection === 2 ?(

            <Skills/>

          ) : ActiveSection === 3 ?( 

            <TechStack/>
            
          ): null}

        </div>

        <Contact/>
        
      </div>

    </>
  )
}

export default Homescreen
