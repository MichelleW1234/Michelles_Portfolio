import { Link } from "react-router-dom";

import Arcade from "../../../images/Arcade.svg";
import TritonTurnup from "../../../images/TritonTurnup.svg";
import Scripta from "../../../images/Scripta.svg";

import "./Projects.css";

function Projects() {    

  const cardNames = ["Arcade", "Scripta", "TritonTurnUp"];
  const cardTypes = ["Personal Project", "Personal Project", "Academic Project"];
  const cardSummaries = [
    "A 2d desktop game where players take on a series of mini-games to earn (or lose) points and win prizes.",
    "A desktop app for creating and managing customizable plain text documents, featuring dynamic styling options, and built-in document management.",
    "A web application that helps UCSD students discover upcoming campus-affiliated events, encouraging social connection and stress relief through greater awareness of engaging activities in the Triton community."
  ];
  const cardImages = [Arcade, Scripta, TritonTurnup];
  const cardPageLinks = ["/arcade", "/scripta", "/tritonturnup"];

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
