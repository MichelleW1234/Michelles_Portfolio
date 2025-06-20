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
                <h1 className = "projectTitle">
                    Arcade
                </h1>
                <p className = "projectText">
                    - Developed an interactive web-based game using React (JavaScript) and CSS. <br/>
                    - Controlled animation flow by syncing React component state with gameplay logic to trigger re-renders and animate game elements in response to user actions. <br/>
                    - Designed an engaging user interface with custom visual assets, CSS animations, background music, and sound effects to enhance the player experience. <br/>
                    - Implemented game logic and dynamic outcomes based on user input, with real-time feedback. <br/>
                    - Developed a macOs desktop application using Tauri.<br/>
                </p>
                <h1 className = "projectText">
                    Media:
                </h1>
                <div className = "projectMediaContainer">
                    <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> GitHub Repository </a>
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
                    - Worked with an Agile team to design and develop a web application managed on GitHub, under the mentorship of a professor with extensive software development expertise. <br/>
                    - Contributed to the planning, design, and development phases, focusing primarily on the app's UI/UX and front-end. <br/>
                    - Conducted user research and usability testing to gain insights into user needs, behaviors, and product interactions. <br/>
                </p>
                <h1 className = "projectText">
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
