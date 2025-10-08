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
        <h1>
            Description:
        </h1>
        <p className = "projectText">
            &bull; Developed an interactive macOs retro-style game with web tech (React (JavaScript), HTML, CSS, Electron) <br/> <br/>
            &bull; Controlled animation flow by syncing React component states with gameplay logic, triggering re-renders and animating game elements in response to user actions <br/> <br/>
            &bull; Designed an engaging user interface with hand-drawn visual assets, CSS animations, background music, and sound effects to enhance the player experience <br/> <br/>
            &bull; Implemented game logic and dynamic outcomes based on user input, with real-time feedback <br/> <br/>
            &bull; Enabled keyboard navigation within the game interface by mapping key events to UI actions <br/> <br/>
            &bull; Implemented persistent data storage using Electron Store to save and restore user progress across app sessions.
        </p>
        <h1>
            Media:
        </h1>
        <div className = "projectMediaContainer">
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases/tag/v1.0.5" target="_blank" rel="noopener noreferrer"> Go to Arcade v1.0.5 </a>
            <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases" target="_blank" rel="noopener noreferrer"> Go to All Arcade Releases</a>
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
