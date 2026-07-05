import {useState} from "react";

import JS from "../../../images/JS.jpg";
import React from "../../../images/React.jpg";
import CSS from "../../../images/CSS.png";
import HTML from "../../../images/HTML.png";
import Figma from "../../../images/Figma.png";
import Github from "../../../images/Github.png";
import Electron from "../../../images/Electron.jpeg";
import Unity from "../../../images/Unity.svg";

import "./TechStack.css";

function TechStack() {

  const skillsList = [JS, React, CSS, HTML, Figma, Github, Electron, Unity];

  const hoveredSkill = (skillIndex) => {

    setActiveSkill(skillIndex);

  }



  return (
    <div className = "sectionContainer">

      <h2 className = "subTitle"> Tools I've Worked With: </h2>
      <div className = "technologyContainer">

        {skillsList.map((item, index) => (

          <img className = "technology" src = {skillsList[index]}/>

        ))}

      </div>
    </div>

  )
}

export default TechStack;
