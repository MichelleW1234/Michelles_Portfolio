import { Link } from "react-router-dom";

import Arcade from "../../../images/Arcade.svg";
import TritonTurnup from "../../../images/TritonTurnup.svg";
import Scripta from "../../../images/Scripta.svg";

import "./Projects.css";

function Projects() {    

  const cardNames = ["Arcade", "TritonTurnup", "Scripta"];
  const cardSummaries = ["short summary goes here short summary goes here short summary goes here short summary goes here short summary goes hereshort summary goes here",
      "short summary goes here",
      "short summary goes here"
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
                <img className= "projectImage" src={cardImages[index]}/>
                <div>
                  <h4>Summary:</h4>
                  <p>{cardSummaries[index]}</p>
                </div>
              </div>

            </div>

            <Link to = {`${cardPageLinks[index]}`} className = "projectSectionButton"> Read More &gt; </Link>

          </div>
        ))}

      </div>

    </div>

  )
}

export default Projects
