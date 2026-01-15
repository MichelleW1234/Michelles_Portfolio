import { Link } from "react-router-dom";
import {useState} from "react";

import Arcade from "../../images/Arcade.svg";
import RPS from "../../images/ArcadeMedia/RPS.svg";
import TTT from "../../images/ArcadeMedia/TTT.svg";
import SNK from "../../images/ArcadeMedia/SNK.svg";
import SPIM2 from "../../images/ArcadeMedia/SPIM2.svg";
import SPIM4 from "../../images/ArcadeMedia/SPIM4.svg";
import ORB from "../../images/ArcadeMedia/ORB.svg";
import CBL from "../../images/ArcadeMedia/CBL.svg";
import BFR from "../../images/ArcadeMedia/BFR.svg";
import SMZ from "../../images/ArcadeMedia/SMZ.svg";
import CHC from "../../images/ArcadeMedia/CHC.svg";
import CWMCat from "../../images/ArcadeMedia/CWMCat.svg";

import "./Projectscreen.css";


function Arcadescreen() {

    const videoTitles = ["Rock-Paper-Scissors", "Tic-Tac-Toe", "Snake", "Space Invasion (Mission 2)", "Space Invasion (Mission 4)",
                        "Orbit", "Color Blast", "Cat Claw Machine", "Balloon Frenzy", "Sky Maze", "Chicken Crossing"];
    const videoImages = [RPS, TTT, SNK, SPIM2, SPIM4, ORB, CBL, CWMCat, BFR, SMZ, CHC];
    const videoLinks = ["https://drive.google.com/file/d/1PKd1yokX2N8gwBfoBmrSXMd78LamrNe4/view?usp=drive_link", 
                        "https://drive.google.com/file/d/1oC9cMNVnP8obfnl9CdFUADgZvoYY-Pr0/view?usp=drive_link", 
                        "https://drive.google.com/file/d/1MKFG1TzGLh8Z7JxC_nQKQuNq6L0rY9En/view?usp=drive_link",
                        "https://drive.google.com/file/d/19MIdDvHk1NA8qMBxPi1Nt79rWcKcn9B6/view?usp=drive_link",
                        "https://drive.google.com/file/d/1tynR68oGVpyzWIjKWeJPbR9X2fhKHdCs/view?usp=drive_link",
                        "https://drive.google.com/file/d/17g4-Q-iU4EJeOaiSFp-MUZ72ByeJZRs6/view?usp=drive_link",
                        "https://drive.google.com/file/d/1OZeglTeHj6pRWC80RMbSqTUVOAuEoPHQ/view?usp=drive_link",
                        "https://drive.google.com/file/d/1XQb_AFsKZTNP3dLgWG3g27lAoIngYN9t/view?usp=drive_link",
                        "https://drive.google.com/file/d/1WbA9IL-9Gd6Jw6AEkmLVYZ8k-kchLq7Z/view?usp=drive_link",
                        "https://drive.google.com/file/d/1npOK4lx2jSFZZAWbtdkZMMEEWV8ToRpx/view?usp=drive_link",
                        "https://drive.google.com/file/d/1TPUmVp_TV3V_aWHpYJbx7BRTzsoLE8d7/view?usp=drive_link"];


    const [openFullVideoSection, setOpenFullVideoSection] = useState(false);
 
    return (

        <>
            <div className="heading">
                <div className="projectTitleIconContainer">
                    <img className= "projectTitleImage" src={Arcade}/>
                    <h1 className = "title"> Arcade </h1>
                </div>
                <div className="horizontalLine"></div>
            </div>

            <div className="projectScreen">

                <Link className = "projectButton" to = "/home"> Back </Link>

                <h2 className="projectSubTitle"> Project Details:</h2>
                <div className = "projectInfoContainer">
                    <p>&gt; Developed an interactive macOs retro-style game with web tech (React (JavaScript), HTML, CSS, Electron)</p>
                    <p>&gt; Controlled animation flow by syncing React component states with gameplay logic, triggering re-renders and animating game elements in response to user actions</p>
                    <p>&gt; Designed an engaging user interface with hand-drawn visual assets, CSS animations, background music, and sound effects to enhance the player experience</p>
                    <p>&gt; Implemented game logic and dynamic outcomes based on user input, with real-time feedback</p>
                    <p>&gt; Enabled keyboard navigation within the game interface by mapping key events to UI actions</p>
                    <p>&gt; Implemented persistent data storage using Electron Store to save and restore user progress across app sessions</p>
                </div>

                <h2 className="projectSubTitle"> Video Content: </h2>
                <div className="projectVideoSectionContainer">

                    <div className="projectVideoContainer">
                        {videoTitles.map((video, index) => (

                            openFullVideoSection ? (

                                <a className = "projectVideoCard" href={videoLinks[index]} target="_blank">
                                    {videoTitles[index]}
                                    <img src={videoImages[index]}/>
                                </a>

                            ) : (

                                index < 3 ? (

                                    <a className = "projectVideoCard" href={videoLinks[index]} target="_blank">
                                        {videoTitles[index]}
                                        <img src={videoImages[index]}/>
                                    </a>

                                ) : (

                                    null

                                )

                            )
                
                        ))}
                    </div>

                    {openFullVideoSection ? (

                        <button className="projectButton" onClick = {() => setOpenFullVideoSection(false)}> Collapse All Videos &#9650; </button>

                    ) : (

                        <button className="projectButton" onClick = {() => setOpenFullVideoSection(true)}> Expand All Videos &#9660; </button>

                    )}

                </div>
                


                <h2 className="projectSubTitle"> Project Links: </h2>
                <div className = "projectLinksContainer">
                    <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                    <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases/tag/v1.0.5" target="_blank" rel="noopener noreferrer"> Go to Arcade v1.0.5 </a>
                    <a className = "projectButton" href="https://github.com/MichelleW1234/Arcade/releases" target="_blank" rel="noopener noreferrer"> Go to All Arcade Releases</a>
                </div>
    
        </div>
        </>

    )

}

export default Arcadescreen
