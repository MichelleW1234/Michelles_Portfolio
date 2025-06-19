import { useState } from 'react';
import ArcadeMedia from "./ProjectComponents/ArcadeMedia.jsx";
import "./Projects.css"

function Projects() {

    const [ArcadeMediaFlag, setArcadeMediaFlag] = useState(false);

  return (
    <div className = "">
        <h1 className = "subTitle">
            My Projects:
        </h1>
        <div className = "projectOuterContainer">

            <div className = "projectContainer">
                <h1 className = "subTitle">
                    Arcade
                </h1>
                <p className = "just_text">
                    Project description goes here
                </p>
                <h1 className = "just_text">
                    Media:
                </h1>
                <div className = "projectMediaContainer">
                    <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> GitHub Repository </a>
                    <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases/download/v1.0.0/Arcade_1.0.0.dmg"> Download Arcade 1.0.0</a>
                    <button className = "projectButton" onClick = {() => setArcadeMediaFlag(true)}> View Video Content </button>
                </div>

                
            </div>

            <div className = "projectContainer">
                <h1 className = "subTitle">
                    TritonTurnUp
                </h1>
                 <p className = "just_text">
                    Project description goes here
                </p>
                <h1 className = "just_text">
                    Media:
                </h1>
                <div className = "projectMediaContainer">
                    <a className = "projectButton" href="https://github.com/MichelleW1234/CSE-110-Project.git" target="_blank" rel="noopener noreferrer"> GitHub Repository </a>
                    <a className = "projectButton" href="https://drive.google.com/file/d/1bjoVWfcJ89o7ha2sFHtFunMhr9dIxjtt/view" target="_blank" rel="noopener noreferrer"> Watch Demo Video </a>
                </div>
            </div> 


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

export default Projects
