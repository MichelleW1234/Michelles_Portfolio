import "../Projects.css";
import Arcade from "../../images/Arcade.svg";

function cardOne() {

  return (
    <div className = "projectContainer">
        <h1 className = "projectTitle">
            Arcade
        </h1>
        <img className= "projectImage" src={Arcade}/>
        <p className = "projectText">
            - A retro-style browser game with interactive mini-games and dynamic scoring. <br/>
            - Used React, Vite, and Router DOM for logic, state, and animation control. <br/>
            - Designed custom visuals, sound, and packaged as macOS desktop app with Tauri. <br/>
        </p>
        <h1 className = "projectText">
            Media:
        </h1>
        <div className = "projectMediaContainer">
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases/download/v1.0.0/Arcade_1.0.0.dmg"> Download Arcade 1.0.0</a>
            <button className = "projectButton" onClick = {() => setArcadeMediaFlag(true)}> View Video Content </button>
        </div>

    </div>

  )
}

export default cardOne
