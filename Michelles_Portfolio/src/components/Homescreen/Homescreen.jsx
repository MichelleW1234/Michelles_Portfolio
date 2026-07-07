import {useState} from "react";

import Introduction from "./HomescreenComponents/Introduction.jsx";
import Projects from "./HomescreenComponents/Projects.jsx";
import Skills from "./HomescreenComponents/Skills.jsx";
import TechStack from "./HomescreenComponents/TechStack.jsx";
import Contact from "./HomescreenComponents/Contact.jsx";

import Email from "../../images/Email.svg";
import Linkedin from "../../images/Linkedin.svg";
import GitHub from "../../images/GitHub.svg";

import {useActiveSection} from "../../providers/ActiveSectionProvider.jsx";

import './Homescreen.css';

function Homescreen() {

  const {ActiveSection, setActiveSection} = useActiveSection();

  
  return (

    <div className = "contentBody">

      <div className="heading">
        <div className="titleContainer">
          <h1 className = "title"> Michelle Wee </h1>
        </div>
        <div className="horizontalLine"></div>
      </div>

      <main className="swipingContentScreen">
        
        <div className="navContainer">
          <button className={ActiveSection === 0 ? "navButtonActive" : "conditionalButton navButton"} onClick = {() => setActiveSection(0)}> Introduction </button>
          <button className={ActiveSection === 1 ? "navButtonActive" : "conditionalButton navButton"} onClick = {() => setActiveSection(1)}> Projects </button>
          <button className={ActiveSection === 2 ? "navButtonActive" : "conditionalButton navButton"} onClick = {() => setActiveSection(2)}> Skills </button>
          <button className={ActiveSection === 3 ? "navButtonActive" : "conditionalButton navButton"} onClick = {() => setActiveSection(3)}> Tech Stack </button>
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

      </main>

      <div className="heading">
        <div className="horizontalLine"></div>
        <div className="titleContainer">
          <h2>Let's Connect!</h2>
          <div className = "contactContainer">
            <a className = "teleportationButton contactBox" href="mailto: michellew1822@gmail.com"> 
              <img src={Email}/>
            </a>
            <a className = "teleportationButton contactBox" href="https://www.linkedin.com/in/michelle-wee123/" target="_blank" rel="noopener noreferrer"> 
              <img src={Linkedin}/>
            </a>
            <a className = "teleportationButton contactBox" href="https://github.com/MichelleW1234" target="_blank" rel="noopener noreferrer"> 
              <img src={GitHub}/>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homescreen
