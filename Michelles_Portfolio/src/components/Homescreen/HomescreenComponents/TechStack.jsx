import {useState} from "react";

import JS from "../../../images/TechStack/JS.png";
import React from "../../../images/TechStack/React.png";
import CSS from "../../../images/TechStack/CSS.png";
import HTML from "../../../images/TechStack/HTML.png";
import CSharp from "../../../images/TechStack/CSharp.png";
import Figma from "../../../images/TechStack/Figma.png";
import Github from "../../../images/TechStack/Github.png";
import Electron from "../../../images/TechStack/Electron.png";
import Unity from "../../../images/TechStack/Unity.png";
import VSCode from "../../../images/TechStack/VSCode.png";

import "./TechStack.css";

function TechStack() {

  const skillsList = [JS, React, CSS, HTML, CSharp, Figma, Github, Electron, Unity, VSCode];

  const hoveredSkill = (skillIndex) => {

    setActiveSkill(skillIndex);

  }



  return (
    <div className = "homeSwipingContentContainer">

      <h2 className = "sectionTitle"> Tools I've Worked With: </h2>
      <div className = "techStackContainer">

        {skillsList.map((item, index) => (

          <img className = "techStackEntry" src = {skillsList[index]}/>

        ))}

      </div>
    </div>

  )
}

export default TechStack;
