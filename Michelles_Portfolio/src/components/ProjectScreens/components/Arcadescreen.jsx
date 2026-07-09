import { Link } from "react-router-dom";
import {useState} from "react";

import RPS from "../../../images/ArcadeMedia/RPS.svg";
import TTT from "../../../images/ArcadeMedia/TTT.svg";
import SNK from "../../../images/ArcadeMedia/SNK.svg";
import SPIM2 from "../../../images/ArcadeMedia/SPIM2.svg";
import SPIM4 from "../../../images/ArcadeMedia/SPIM4.svg";
import ORB from "../../../images/ArcadeMedia/ORB.svg";
import CBL from "../../../images/ArcadeMedia/CBL.svg";
import BFR from "../../../images/ArcadeMedia/BFR.svg";
import SMZ from "../../../images/ArcadeMedia/SMZ.svg";
import CHC from "../../../images/ArcadeMedia/CHC.svg";
import CWMCat from "../../../images/ArcadeMedia/CWMCat.svg";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function Arcadescreen() {

    const timeLineDates = ["12/2024", "04/2025", "06/2025", "08/2025", "09/2025", "10/2025"];
    const timeLineDescriptions = ["Project started", 
                                "First Github release (Arcade V1.0.0 for Mac)",  
                                "Second Github release (Arcade V1.0.1 for Mac)",
                                "Third + Fourth Github release (Arcade V1.0.2 & V1.0.3 for Mac)",
                                "Fifth Github release (Arcade V1.0.4 for Mac)",
                                "Sixth Github release (Arcade V1.0.5 for Mac)"
                            ];

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
    const videoSummaries = ["A 10-round game of basic Rock-Paper-Scissors where players compete against the computer.",      
                            "A standard 3×3 game of tic-tac-toe against the computer, with the first player determined by a coin flip and points awarded based on the outcome.",
                            "Snake, where the user controls the snake using WASD to collect apples for points while avoiding an early exit penalty.",
                            "The 2nd mission in Space Invasion, where the user attempts to eliminate an alien hive with two different variants before they reach them.",
                            "The 4th and final mission in Space Invasion, where the user attempts to defeat the hive queen without triggering an explosion and before their flashlight battery runs out.",
                            "Orbit, where the user projectDetailsRowContainers their timing by stopping the moving indicator on the green zone.",
                            "Color Blast, where the user projectDetailsRowContainers their reflexes by clicking circles that match the target color to earn points while avoiding incorrect selections under a time limit.",
                            "The Cat Claw Machine, where the user attempts to win a prize by timing their claw grabs based on where the green ball lands.",
                            "Balloon Frenzy, where the user pops as many balloons as they can under a time limit while avoiding birds.",
                            "Sky Maze, where the user uses WASD to guide the bird up and down to dodge incoming walls and travel as far as possible.",
                            "Chicken Crossing, where the user uses WASD to navigate the chicken through traffic under a time limit, avoiding cars and using safe grassy zones.",
                        ];

    

    const [openFullVideoSection, setOpenFullVideoSection] = useState(false);
 
    return (

        <div className="contentBody">
            
            <div className="heading">
                <div className="titleContainer titleContainer-Arcade">
                    <h1 className = "title"> Arcade </h1>
                </div>
                <div className="horizontalLine"></div>
            </div>

            <div className="projectScreen">

                <Link className = "teleportationButton projectPageJumpButton" to = "/home"> &lt; Back to Home </Link>

                <h2 className="subTitle"> Project Details:</h2>
                <div className = "projectGeneralModuleContainer">
                    <div className="projectDetailsRowContainer">
                        <div className="projectDetailsModuleContainer">
                            <h3 className="projectGeneralModuleSubTitle">Features:</h3>
                            <div className = "projectDetailsContentContainer">
                                <p>&gt; Dynamic scoring system with action-based point rewards and penalties </p>
                                <p>&gt; Player-driven point economy with prize redemption, claw machines, and gameplay purchases </p>
                                <p>&gt; Multiple interactive mini-games featuring player-driven gameplay and dynamic outcomes </p>
                                <p>&gt; Integrated audio systems for event-triggered sound effects and background music </p>
                                <p>&gt; State-driven animations synchronized with gameplay events </p>
                                <p>&gt; Persistent storage to save and restore user progress across sessions </p>
                                <p>&gt; Keyboard input mapping for intuitive game navigation and controls </p>
                            </div>
                        </div>

                        <div className="projectDetailsModuleContainer">
                            <h3 className="projectGeneralModuleSubTitle">Tools Used: </h3>
                            <div className = "projectDetailsContentContainer"> 
                                <h4> &gt; Core Frameworks & Libraries: </h4>
                                <p> React, Electron, React Router </p>
                                <h4> &gt; Programming Languages: </h4>
                                <p> JavaScript, HTML, CSS </p>
                                <h4> &gt; Build & Packaging: </h4>
                                <p> Vite, Node.js, npm, Electron Builder </p>
                            </div>
                        </div>
                    </div>

                    <div className="projectDetailsRowContainer">
                        <div className="projectDetailsModuleContainer">
                            <h3 className="projectGeneralModuleSubTitle"> Timeline: </h3>

                            <div className = "projectDetailsContentContainer">

                                <div className = "projectTimelineContainer"> 
                                    
                                    {timeLineDates.map((item, index) => (

                                        <div className = "projectTimelineEntryContainer">
                                            <div className="projectTimelineEntryDateContainer">
                                                <p> {timeLineDates[index]} </p>
                                                <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div> 
                                            </div>
                                            <p> {timeLineDescriptions[index]} </p>
                                        </div>

                                    ))}

                                </div>
                            
                            </div>
                        
                        </div>
                    </div>

                </div>

                <h2 className="subTitle"> Project Media: </h2>
                <div className = "projectGeneralModuleContainer">
                    <h3 className="projectGeneralModuleSubTitle"> Video Content: </h3>
                    <div className="projectExpandableVideoContainer">

                        <div className="projectVideoContainer">
                            {videoTitles.map((video, index) => (

                                openFullVideoSection ? (

                                    <a className = "teleportationButton projectVideoEntryButton" href={videoLinks[index]} target="_blank">
                                        <p> &#9654; Watch {videoTitles[index]}</p> 
                                        <div className="projectVideoEntryButtonDescriptionContainer">
                                            <img src={videoImages[index]}/>
                                            <p>{videoSummaries[index]}</p>
                                        </div>
                                    </a>

                                ) : (

                                    index < 4 ? (

                                        <a className = "teleportationButton projectVideoEntryButton" href={videoLinks[index]} target="_blank">
                                            <p> &#9654; Watch {videoTitles[index]}</p> 
                                            <div className="projectVideoEntryButtonDescriptionContainer">
                                                <img src={videoImages[index]}/>
                                                <p>{videoSummaries[index]}</p>
                                            </div>
                                        </a>

                                    ) : (

                                        null

                                    )

                                )
                    
                            ))}
                        </div>

                        {openFullVideoSection ? (

                            <button className="conditionalButton projectPageExpansionButton" onClick = {() => setOpenFullVideoSection(false)}> Collapse All Videos &#9650; </button>

                        ) : (

                            <button className="conditionalButton projectPageExpansionButton" onClick = {() => setOpenFullVideoSection(true)}> Expand All Videos &#9660; </button>

                        )}

                    </div>
                
                    <h3 className="projectGeneralModuleSubTitle"> External Links: </h3>
                    <div className = "projectLinksContainer">
                        <a className = "teleportationButton projectLinkEntryButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                        <a className = "teleportationButton projectLinkEntryButton" href="https://github.com/MichelleW1234/Arcade/releases/tag/v1.0.5" target="_blank" rel="noopener noreferrer"> Go to Arcade v1.0.5 </a>
                        <a className = "teleportationButton projectLinkEntryButton" href="https://github.com/MichelleW1234/Arcade/releases" target="_blank" rel="noopener noreferrer"> Go to All Arcade Releases</a>
                    </div>

                </div>

                <button className = "teleportationButton projectPageJumpButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>
    
            </div>

            <div className="heading">
                <div className="horizontalLine"></div>
                <div className="titleContainer titleContainer-Arcade">
                    <h1 className = "title title-UpsideDown"> Arcade </h1>
                </div>
            </div>

        </div>

    )

}

export default Arcadescreen
