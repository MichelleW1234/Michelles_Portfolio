import { Link } from "react-router-dom";

import "./Projects.css";

function Projects() {    

  const cardNames = ["Petopia", "UpDownTime", "Scripta", "Arcade", "TritonTurnUp"];
  const cardTypes = ["Personal Project", "Club Project", "Personal Project", "Personal Project", "Academic Project"];
  const cardSummaries = [
    "A 2d desktop game where players adopt and care for pets by managing their needs through interactive activities and mini-games, watching them grow through different life stages.", 
    "A 2D Unity adventure game where players navigate dynamic environments, battle monsters, and overcome changing gameplay conditions to reach the objective.",
    "A desktop app for creating and managing customizable plain text documents, featuring dynamic styling options and built-in document management.",
    "A 2d desktop game where players take on a series of mini-games to earn (or lose) points and win prizes.",
    "A web application that helps UCSD students discover upcoming campus-affiliated events, encouraging social connection and stress relief through greater awareness of engaging activities in the Triton community."
  ];
  const cardPageLinks = ["/petopia", "/updowntime", "/scripta", "/arcade", "/tritonturnup"];

  return (
    <div className = "homeSwipingContentContainer">
        
      <h2 className = "sectionTitle"> My Projects: </h2>

      <div className="projectsContainer scrollableContainer">

        {cardNames.map((card, index) => (

          <div key = {index} className = "projectsEntryContainer scrollableEntryContainer">
            <div className = {`projectsEntryCardContainer projectsEntryCardContainer-${card}`}>

              <h3>{cardNames[index]}</h3>
              <div className="projectsEntryCardHorizontalLine"></div>

              <div className="projectsEntryCardDescriptionContainer">
                <h4> Project Type: </h4> 
                <p> {cardTypes[index]} </p>
                <h4>Summary: </h4> 
                <p> {cardSummaries[index]} </p>
              </div>

            </div>

            <Link to = {`${cardPageLinks[index]}`} className = "teleportationButton projectsEntryReadMoreButton"> Read More &gt; </Link>

          </div>
        ))}

      </div>

    </div>

  )
}

export default Projects
