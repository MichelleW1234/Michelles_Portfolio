import "../Projects.css";
import { useState } from 'react';
import Arcade from "../../images/Arcade.svg";
import ArcadeMedia from "./ArcadeMedia.jsx";

function cardOne() {
    const [ArcadeMediaFlag, setArcadeMediaFlag] = useState(false);

  return (
    <div className = "projectContainer">
        <h1 className = "projectTitle">
            Arcade
        </h1>
        <div className="horizontalLineProject"></div>
        <br/>
        <img className= "projectImage" src={Arcade}/>
        <p className = "projectText">
            &bull; A retro-style browser game with interactive mini-games and dynamic scoring. <br/>
            &bull; Used React, Vite, and Router DOM for logic, state, and animation control. <br/>
            &bull; Designed custom visuals, sound, and packaged as macOS desktop app with Tauri. <br/>
        </p>
        <h1 className = "projectText">
            Media:
        </h1>
        <div className = "projectMediaContainer">
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases/tag/v1.0.2" target="_blank" rel="noopener noreferrer"> Go to Arcade v1.0.2</a>
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases/tag/v1.0.1" target="_blank" rel="noopener noreferrer"> Go to Arcade v1.0.1</a>
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer"> Go to Arcade v1.0.0</a>
            <button className = "projectButton" onClick = {() => setArcadeMediaFlag(true)}> View Video Content </button>
        </div>

        {ArcadeMediaFlag === true ? (

            <ArcadeMedia
                setArcadeMediaFlag = {setArcadeMediaFlag}
            />

        ) : (

            null

        )}


    </div>

  )
}

export default cardOne
