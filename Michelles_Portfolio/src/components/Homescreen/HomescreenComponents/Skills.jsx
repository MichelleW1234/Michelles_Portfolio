import {useState} from "react";

import SkillsExpandedCard from "./SkillsComponents/SkillsExpandedCard.jsx";

import terminal from "../../../images/Terminal.png";
import paint from "../../../images/Paint.png";
import gear from "../../../images/Gear.png";
import cursor from "../../../images/Cursor.png";
import controller from "../../../images/Controller.png";

import "./Skills.css";

function Skills() {

  const [activeSkill, setActiveSkill] = useState(-1);

  const skillsList = ["Software Development", "Visual Design", "Software Engineering", "UI/UX", "Game Development"]; 
  const skillsImage = [terminal, paint, gear, cursor, controller];

  const hoveredSkill = (skillIndex) => {

    setActiveSkill(skillIndex);

  }



  return (

    <>
        {activeSkill !== -1 && 
          <SkillsExpandedCard
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
          />
        }
    <div className = "homeSwipingSectionContainer">

      <h2 className = "subTitle"> My Skills: </h2>
      <div className = "skillsContainer">

        {skillsList.map((item, index) => (

          <button
            key = {index} 
            className="conditionalButton skillsEntry"
            onClick={() => hoveredSkill(index)}
          >
            {item}
            <img src = {skillsImage[index]}/>
          </button>

        ))}

      </div>
    </div>
    </>

  )
}

export default Skills
