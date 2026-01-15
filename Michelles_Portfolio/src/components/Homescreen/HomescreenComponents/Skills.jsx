import {useState} from "react";

import SkillsExpandedCard from "./SkillsComponents/SkillsExpandedCard.jsx";

import "./Skills.css";

function Skills() {

  const [activeSkill, setActiveSkill] = useState(-1);

  const skillsList = ["React (JavaScript)", "CSS", "Figma", "Web Application Development", "Agile & Software Development", "Game Development"]; 


  const hoveredSkill = (skillIndex) => {

    setActiveSkill(skillIndex);

  }



  return (
    <div className = "sectionContainer">

      <h2 className = "subTitle"> My Skills: </h2>
      <div className = "skillsContainer">

        {activeSkill !== -1 && 
          <SkillsExpandedCard
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
          />
        }

        {skillsList.map((item, index) => (

          <button
            key = {index} 
            className="skill"
            onClick={() => hoveredSkill(index)}
          >
            {item}
          </button>

        ))}

      </div>
    </div>

  )
}

export default Skills
