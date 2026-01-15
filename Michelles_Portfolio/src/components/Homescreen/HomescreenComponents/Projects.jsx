import { Link } from "react-router-dom";

import Arcade from "../../../images/Arcade.svg";
import TritonTurnup from "../../../images/TritonTurnup.svg";
import Scripta from "../../../images/Scripta.svg";

import "./Projects.css";

function Projects() {    

  const cardNames = ["Arcade", "TritonTurnup", "Scripta"];
  const cardTypes = ["Personal Project", "Academic Project", "Personal Project"];
  const cardSummaries = ["A retro-style browser game where players take on a series of mini-games to earn (or lose) points and win prizes, tracked through a dynamic scoring system. Built with React, Vite, and React Router DOM.",
      "A web app that helps UCSD students discover upcoming campus-affiliated events. After logging in, students can add events to a calendar based on availability, encouraging social connection and stress relief through greater awareness of engaging activities in the Triton community.",
      "A React-based web app for creating and managing customizable plain text documents, featuring dynamic styling options, image import with resizing controls, and built-in document management."
  ];
  const cardImages = [Arcade, TritonTurnup, Scripta];
  const cardPageLinks = ["/arcade", "/tritonturnup", "/scripta"];

  return (
    <div className = "sectionContainer">
        
      <h2 className = "subTitle"> My Projects: </h2>

      <div className="projectsContainer">
        
        {cardNames.map((card, index) => (

          <div key = {index} className = "projectContainer">
            <div className = "projectCard">

              <h3>{cardNames[index]}</h3>
              <div className="projectHorizontalLine"></div>

              <div className = "projectIntroContainer">
                <div>
                  <img className= "projectImage" src={cardImages[index]}/>
                </div>
                <div className="projectSummaryContainer">
                  <h4> Project Type: </h4> 
                  <p> {cardTypes[index]} </p>
                  <h4>Summary: </h4> 
                  <p> {cardSummaries[index]} </p>
                </div>
              </div>

            </div>

            <Link to = {`${cardPageLinks[index]}`} className = "goToProjectButton"> Read More &gt; </Link>

          </div>
        ))}

      </div>

    </div>

  )
}

export default Projects
