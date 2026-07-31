import {useState} from "react";

import Introduction from "./HomescreenComponents/Introduction.jsx";
import Projects from "./HomescreenComponents/Projects.jsx";
import Skills from "./HomescreenComponents/Skills.jsx";
import TechStack from "./HomescreenComponents/TechStack.jsx";

import EmailContact from "../../images/Contacts/EmailContact.png";
import LinkedinContact from "../../images/Contacts/LinkedinContact.png";
import GitHubContact from "../../images/Contacts/GitHubContact.png";

import {useActiveSection} from "../../providers/ActiveSectionProvider.jsx";

import './Homescreen.css';

function Homescreen() {

  const {ActiveSection, setActiveSection} = useActiveSection();

  const test = (e) => {

    console.log(e.target.value);
    /*setActiveSection(e.target.value);*/

  }
  
  return (

    <div className = "contentBody">

      <div className="banner">
        <div className="bannerContentContainer">
          <h1 className = "bannerContentWords"> Michelle Wee </h1>
        </div>
        <div className="bannerHorizontalLine"></div>
      </div>

      <div className="homeSwipingContainer">

        <input
          type="range"
          min="0"
          max="3"
          step = "1"
          value={ActiveSection}
          onChange={(e) => setActiveSection(Number(e.target.value))}
        />
    
        <div className="homeNavContainer">
          <button className={ActiveSection === 0 ? "homeNavButtonActive" : "conditionalButton homeNavButton"} onClick = {() => setActiveSection(0)}> Introduction </button>
          <button className={ActiveSection === 1 ? "homeNavButtonActive" : "conditionalButton homeNavButton"} onClick = {() => setActiveSection(1)}> Projects </button>
          <button className={ActiveSection === 2 ? "homeNavButtonActive" : "conditionalButton homeNavButton"} onClick = {() => setActiveSection(2)}> Skills </button>
          <button className={ActiveSection === 3 ? "homeNavButtonActive" : "conditionalButton homeNavButton"} onClick = {() => setActiveSection(3)}> Tech Stack </button>
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


      <div className="banner">
        <div className="bannerHorizontalLine"></div>
        <div className="bannerContentContainer">
          <h2>Let's Connect!</h2>
          <div className = "homeContactsContainer">
            <a className = "teleportationButton homeContactsButton" href="mailto: michellew1822@gmail.com"> 
              <img src={EmailContact}/>
            </a>
            <a className = "teleportationButton homeContactsButton" href="https://www.linkedin.com/in/michelle-wee123/" target="_blank" rel="noopener noreferrer"> 
              <img src={LinkedinContact}/>
            </a>
            <a className = "teleportationButton homeContactsButton" href="https://github.com/MichelleW1234" target="_blank" rel="noopener noreferrer"> 
              <img src={GitHubContact}/>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homescreen
