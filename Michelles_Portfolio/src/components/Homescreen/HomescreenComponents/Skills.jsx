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

  const canHover = window.matchMedia("(hover: hover)").matches;

  const nonHoverActivation = (skillIndex) => {

    if (!canHover)  {

      setActiveSkill(skillIndex);

    }

  }

    const hoverActivation = (skillIndex) => {

    if (canHover)  {

      setActiveSkill(skillIndex);

    }

  }



  return (

    <>
        {activeSkill !== -1 && 
          <SkillsExpandedCard
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
          />
        }
    <div className = "homeSwipingContentContainer">

      <h2 className = "sectionTitle"> My Skills: </h2>
      <div className = "skillsContainer">

        {skillsList.map((item, index) => (

          <button
            key = {index} 
            className={`conditionalButton skillsEntry ${activeSkill === index ? "visible" : ""}`}
            onClick={() => nonHoverActivation(index)}
            onMouseEnter={() => hoverActivation(index)}
            onMouseLeave={() => hoverActivation(-1)}
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
