import { useState } from 'react';
import ArcadeMedia from "./ProjectComponents/ArcadeMedia.jsx";
import "./Projects.css"

function Projects() {

    const [ArcadeMediaFlag, setArcadeMediaFlag] = useState(false);

  return (
    <div>
        <h1 className = "subTitle">
            My Projects:
        </h1>
        <div className = "projectOuterContainer">

            <div className = "projectInnerContainer">

                <div className = "projectContainer">
                    <h1 className = "projectTitle">
                        Arcade
                    </h1>
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

                <div className = "projectContainer">
                    <h1 className = "projectTitle">
                        TritonTurnUp
                    </h1>
                    <h1 className = "projectText">
                        Description:
                    </h1>
                    <p className = "projectText">
                        Our web app, TritonTurnup, allows UCSD students to browse a detailed list of upcoming and ongoing events 
                        affiliated with the school. Upon logging in, students can add these events to their calendars based on their 
                        schedule availability, promoting socialization and stress relief by raising awareness of fun and engaging events 
                        within the Triton community.
                    </p>
                    <h1 className = "projectText">
                        My Role:
                    </h1>
                    <p className = "projectText">
                        - Contributed to UI/UX and front-end in an Agile team using GitHub <br/>
                        - Conducted user research and testing to improve engagement <br/>
                        - Mentored by professor with extensive software development experience <br/>

                    </p>
                    <h1 className = "projectText">
                        Media:
                    </h1>
                    <div className = "projectMediaContainer">
                        <a className = "projectButton" href="https://github.com/MichelleW1234/CSE-110-Project.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                        <a className = "projectButton" href="https://drive.google.com/file/d/1bjoVWfcJ89o7ha2sFHtFunMhr9dIxjtt/view" target="_blank" rel="noopener noreferrer"> Watch Demo Video </a>
                    </div>
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
