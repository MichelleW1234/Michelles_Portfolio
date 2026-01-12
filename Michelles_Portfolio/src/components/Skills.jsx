import {useState} from "react";

import SkillsExpandedCard from "./SkillsExpandedCard";

import "./Skills.css";

function Skills() {

  const [activeSkill, setActiveSkill] = useState(-1);

  const skillsList = ["React (JavaScript)", "CSS", "Figma", "Web Application Development", "Agile & Software Development", "Game development"]; 


  const hoveredSkill = (skillIndex) => {

    setActiveSkill(skillIndex);

  }



  return (
    <div className = "skillsScreen">

      <h1 className = "subTitle">
        My Skills:
      </h1>
      <div className = "skillsContainer">

        {activeSkill !== -1 && 
          <SkillsExpandedCard
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
          />
        }

        {skillsList.map((item, index) => (

          <div 
            key = {index} 
            className="skill"
            onClick={() => hoveredSkill(index)}
          >
            {item}
          </div>

        ))}

      </div>
    </div>

  )
}

export default Skills
