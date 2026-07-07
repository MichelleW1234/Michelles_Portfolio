import { Link } from "react-router-dom";
import {useState} from "react";

import Arcade from "../../../images/Arcade.svg";
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
    const videoSummaries = ["A demonstration of a 10-round game of basic Rock-Paper-Scissors where players compete against the computer.",      
                            "A demonstration of a standard 3×3 game of tic-tac-toe against the computer, with the first player determined by a coin flip and points awarded based on the outcome.",
                            "A demonstration of Snake, where the user controls the snake using WASD to collect apples for points while avoiding an early exit penalty.",
                            "A demonstration of the 2nd mission in Space Invasion, where the user attempts to eliminate an alien hive with two different variants before they reach them.",
                            "A demonstration of the 4th and final mission in Space Invasion, where the user attempts to defeat the hive queen without triggering an explosion and before their flashlight battery runs out.",
                            "A demonstration of Orbit, where the user projectDetailsContainers their timing by stopping the moving indicator on the green zone.",
                            "A demonstration of Color Blast, where the user projectDetailsContainers their reflexes by clicking circles that match the target color to earn points while avoiding incorrect selections under a time limit.",
                            "A demonstration of the Cat Claw Machine, where the user attempts to win a prize by timing their claw grabs based on where the green ball lands.",
                            "A demonstration of Balloon Frenzy, where the user pops as many balloons as they can under a time limit while avoiding birds.",
                            "A demonstration of Sky Maze, where the user uses WASD to guide the bird up and down to dodge incoming walls and travel as far as possible.",
                            "A demonstration of Chicken Crossing, where the user uses WASD to navigate the chicken through traffic under a time limit, avoiding cars and using safe grassy zones.",
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
                <div className = "projectModuleContainer">

                    <div className="projectDetailsContainer">
                        <div className="projectDetailsModuleContainer">
                            <h3 className="projectModuleSubTitle">Features:</h3>
                            <div className = "projectDetailsInfoBlockContainer"> 
                                <p>&gt; Scoring system with dynamic point gains and losses based on player actions</p>
                                <p>&gt; Player-controlled point economy with multiple spending options, including prize redemption, claw machines, and additional gameplay </p>
                                <p>&gt; Multiple interactive mini-games with dynamic outcomes based on player input that players can choose from to accumulate points </p>
                                <p>&gt; Integrated sound effects and background music triggered by gameplay events </p>
                                <p>&gt; State-driven animations that respond to player actions and gameplay outcomes </p>
                                <p>&gt; Persistent storage to save and restore user progress across app sessions </p>
                                <p>&gt; Mapped keyboard input to in-game actions, allowing intuitive navigation and gameplay control </p>
                            </div>
                        </div>

                        <div className="projectDetailsModuleContainer">
                            <h3 className="projectModuleSubTitle">Tools Used: </h3>
                            <div className = "projectDetailsInfoBlockContainer"> 
                                <h4> &gt; Core Frameworks & Libraries: </h4>
                                <p> React, Electron, React Router </p>
                                <h4> &gt; Programming Languages: </h4>
                                <p> JavaScript, HTML, CSS </p>
                                <h4> &gt; Build & Packaging: </h4>
                                <p> Vite, Node.js, npm, Electron Builder </p>
                            </div>
                        </div>
                    </div>

                    <h3 className="projectModuleSubTitle"> Timeline: </h3>

                    <div className = "projectDetailsInfoBlockContainer">
                        <div className = "projectTimelineContainerLarge"> 
                            <div className = "projectTimelineContainerInner">
                                <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div></div>
                                <p>&nbsp; 12/2024 &#8594; Project started</p>
                            </div>
                            <div className = "projectTimelineContainerInner">
                                <div className="projectTimeline"><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div></div>
                                <p>&nbsp; 04/2025 &#8594; First Github release (Arcade V1.0.0 for Mac)</p>
                            </div>
                            <div className = "projectTimelineContainerInner">
                                <div className="projectTimeline"><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div></div>
                                <p>&nbsp; 06/2025 &#8594; Second Github release (Arcade V1.0.1 for Mac)</p>
                            </div>
                            <div className = "projectTimelineContainerInner">
                                <div className="projectTimeline"><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div></div>
                                <p>&nbsp; 08/2025 &#8594; Third + Fourth Github releases (Arcade V1.0.2 &  V1.0.3 for Mac)</p>
                            </div>
                            <div className = "projectTimelineContainerInner">
                                <div className="projectTimeline"><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div></div>
                                <p>&nbsp; 09/2025 &#8594; Fifth Github release (Arcade V1.0.4 for Mac)</p>
                            </div>
                            <div className = "projectTimelineContainerInner">
                                <div className="projectTimeline"><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePoint"></div></div>
                                <p>&nbsp; 10/2025 &#8594; Sixth Github release (Arcade V1.0.5 for Mac) </p>
                            </div>
                        </div>
                        
                        <div className = "projectTimelineContainerSmall"> 
                            <div className = "projectTimelineContainerInner">
                                <p> &nbsp; 12/2024 </p>
                                <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/></div>
                                <p> &nbsp; Project started</p>
                            </div>

                            <div className = "projectTimelineContainerInner">
                                <p>&nbsp; 04/2025 </p>
                                <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/></div>
                                <p> &nbsp; First Github release (Arcade V1.0.0 for Mac)</p>
                            </div>
                            
                            <div className = "projectTimelineContainerInner">
                                <p>&nbsp; 06/2025</p>
                                <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/></div>
                                <p> &nbsp; Second Github release (Arcade V1.0.1 for Mac)</p>
                            </div>
                            
                            <div className = "projectTimelineContainerInner">
                                <p>&nbsp; 08/2025</p>
                                <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/></div>
                                <p> &nbsp; Third + Fourth Github releases (Arcade V1.0.2 &  V1.0.3 for Mac)</p>
                            </div>
                            
                            <div className = "projectTimelineContainerInner">
                                <p> &nbsp; 09/2025 </p>
                                <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/></div>
                                <p> &nbsp; Fifth Github release (Arcade V1.0.4 for Mac)</p>
                            </div>

                            <div className = "projectTimelineContainerInner">
                                <p> &nbsp; 10/2025 </p>
                                <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/></div>
                                <p> &nbsp; Sixth Github release (Arcade V1.0.5 for Mac) </p>
                            </div>
                        </div>
                    </div>

                </div>

                <h2 className="subTitle"> Project Media: </h2>
                <div className = "projectModuleContainer">
                    <h3 className="projectModuleSubTitle"> Video Content: </h3>
                    <div className="projectVideoSectionContainer">

                        <div className="projectVideoContainer">
                            {videoTitles.map((video, index) => (

                                openFullVideoSection ? (

                                    <a className = "teleportationButton projectVideoCard" href={videoLinks[index]} target="_blank">
                                        <p> &#9654; Watch {videoTitles[index]}</p> 
                                        <div className="projectVideoCardInner">
                                            <img src={videoImages[index]}/>
                                            <p>{videoSummaries[index]}</p>
                                        </div>
                                    </a>

                                ) : (

                                    index < 4 ? (

                                        <a className = "teleportationButton projectVideoCard" href={videoLinks[index]} target="_blank">
                                            <p> &#9654; Watch {videoTitles[index]}</p> 
                                            <div className="projectVideoCardInner">
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
                
                    <h3 className="projectModuleSubTitle"> External Links: </h3>
                    <div className = "projectLinksContainer">
                        <a className = "teleportationButton projectLinkButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                        <a className = "teleportationButton projectLinkButton" href="https://github.com/MichelleW1234/Arcade/releases/tag/v1.0.5" target="_blank" rel="noopener noreferrer"> Go to Arcade v1.0.5 </a>
                        <a className = "teleportationButton projectLinkButton" href="https://github.com/MichelleW1234/Arcade/releases" target="_blank" rel="noopener noreferrer"> Go to All Arcade Releases</a>
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
