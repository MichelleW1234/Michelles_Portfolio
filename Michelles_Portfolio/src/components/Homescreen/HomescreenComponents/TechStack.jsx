import {useState} from "react";

import JS from "../../../images/JS.png";
import React from "../../../images/React.png";
import CSS from "../../../images/CSS.png";
import HTML from "../../../images/HTML.png";
import CSharp from "../../../images/CSharp.png";
import Figma from "../../../images/Figma.png";
import Github from "../../../images/Github.png";
import Electron from "../../../images/Electron.png";
import Unity from "../../../images/Unity.png";
import VSCode from "../../../images/VSCode.png";

import "./TechStack.css";

function TechStack() {

  const skillsList = [JS, React, CSS, HTML, CSharp, Figma, Github, Electron, Unity, VSCode];

  const hoveredSkill = (skillIndex) => {

    setActiveSkill(skillIndex);

  }



  return (
    <div className = "homeSwipingSectionContainer">

      <h2 className = "subTitle"> Tools I've Worked With: </h2>
      <div className = "techStackContainer">

        {skillsList.map((item, index) => (

          <img className = "techStackEntry" src = {skillsList[index]}/>

        ))}

      </div>
    </div>

  )
}

export default TechStack;
