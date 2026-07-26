import { Link } from "react-router-dom";
import {useState} from "react";

import RPS from "../../../videos/RPS.mp4";
import TTT from "../../../videos/TTT.mp4";
import SNK from "../../../videos/SNK.mp4";
import SPIM2 from "../../../videos/SPIM2.mp4";
import SPIM4 from "../../../videos/SPIM4.mp4";
import ORB from "../../../videos/ORB.mp4";
import CBL from "../../../videos/CBL.mp4";
import CWMCat from "../../../videos/CWMCat.mp4";
import BFR from "../../../videos/BFR.mp4";
import SMZ from "../../..//videos/SMZ.mp4";
import CHC from "../../../videos/CHC.mp4";

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
    const videoDownloads = [RPS, TTT, SNK, SPIM2, SPIM4, ORB, CBL, CWMCat, BFR, SMZ, CHC];

    const videoSummaries = ["Basic 10-round game where players compete against the computer.",      
                            "Standard 3×3 game against the computer, with the first player determined by a coin flip and points awarded based on the outcome.",
                            "User controls the snake using WASD to collect apples for points while avoiding an early exit penalty.",
                            "2nd mission, where the user attempts to eliminate an alien hive with two different variants before they reach them.",
                            "4th and final mission, where the user attempts to defeat the hive queen without triggering an explosion and before their flashlight battery runs out.",
                            "User tests their reaction time by stopping the moving indicator on the green zone.",
                            "User tests their reflexes by clicking circles that match the target color to earn points while avoiding incorrect selections under a time limit.",
                            "User attempts to win a prize by timing their claw grabs based on where the green ball lands.",
                            "User pops as many balloons as they can under a time limit while avoiding birds.",
                            "User uses WASD to guide the bird up and down to dodge incoming walls and travel as far as possible.",
                            "User uses WASD to navigate the chicken through traffic under a time limit, avoiding cars and using safe grassy zones.",
                        ];

    const canHover = window.matchMedia("(hover: hover)").matches;

    const [openFullVideoSection, setOpenFullVideoSection] = useState(false);
 
    return (

        <div className="contentBody">
            
            <div className="banner">
                <div className="bannerContentContainer bannerContentContainer-Arcade">
                    <h1 className = "bannerContentWords"> Arcade </h1>
                </div>
                <div className="bannerHorizontalLine"></div>
            </div>

            <div className="projectScreen">

                <Link className = "teleportationButton projectPageJumpButton" to = "/home"> &lt; Back to Home </Link>

                <h2 className="sectionTitle"> Project Details:</h2>
                <div className = "projectSectionDetailsContainer">
                    
                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">Features:</h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer">
                            <p>&gt; Dynamic scoring system with action-based point rewards and penalties </p>
                            <p>&gt; Player-driven point economy with prize redemption, claw machines, and gameplay purchases </p>
                            <p>&gt; Multiple interactive mini-games featuring player-driven gameplay and dynamic outcomes </p>
                            <p>&gt; Integrated audio systems for event-triggered sound effects and background music </p>
                            <p>&gt; State-driven animations synchronized with gameplay events </p>
                            <p>&gt; Persistent storage to save and restore user progress across sessions </p>
                            <p>&gt; Keyboard input mapping for intuitive game navigation and controls </p>
                        </div>
                    </div>

                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">Tools Used: </h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer"> 
                            <h4> &gt; Core Frameworks & Libraries: </h4>
                            <p> React, Electron, React Router </p>
                            <h4> &gt; Programming Languages: </h4>
                            <p> JavaScript, HTML, CSS </p>
                            <h4> &gt; Build & Packaging: </h4>
                            <p> Vite, Node.js, npm, Electron Builder </p>
                            <h4> &gt; Development Tools: </h4>
                            <p> VSCode, GitHub</p>
                        </div>
                    </div>

                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle"> Timeline: </h3>

                        <div className = "projectSectionDetailsSectionGeneralContentContainer">

                            <div className = "projectSectionDetailsSectionGeneralContentTimelineContainer"> 
                                
                                {timeLineDates.map((item, index) => (

                                    <div className = "projectSectionDetailsSectionGeneralContentTimelineEntryContainer">
                                        <div className="projectSectionDetailsSectionGeneralContentTimelineEntryDateContainer">
                                            <p> {timeLineDates[index]} </p>
                                            <div className="projectSectionDetailsSectionGeneralContentTimelineEntryVisualContainer"><div className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualPoint"></div><hr className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualLine"/></div> 
                                        </div>
                                        <p> {timeLineDescriptions[index]} </p>
                                    </div>

                                ))}

                            </div>
                        
                        </div>
                    
                    </div>

                </div>


                <h2 className="sectionTitle"> Project Media: </h2>
                <div className = "projectSectionMediaContainer">
                    <h3 className="projectSectionSubsectionTitle"> Video Content: </h3>
                    <div className="projectSectionMediaSectionVideosExpandableContainer">

                        {canHover ? (

                            <>

                                {videoTitles.map((video, index) => (

                                    openFullVideoSection ? (

                                        index % 2 === 0 ? (

                                            <div key = {index} className="projectSectionMediaSectionVideosExpandableEntryContainer projectSectionMediaSectionVideosExpandableEntryContainer-Even">

                                                <video 
                                                    controls={!canHover}
                                                    muted
                                                    playsInline
                                                    onMouseEnter={canHover ? (e) => e.currentTarget.play() : undefined}
                                                    onMouseLeave={canHover ? (e) => e.currentTarget.pause() : undefined}
                                                >

                                                    <source src={videoDownloads[index]} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>

                                                <div className = "projectSectionMediaSectionVideosExpandableEntryInfoContainer">
                                                    <p>&#9654; {videoTitles[index]}</p>
                                                    <p>{videoSummaries[index]}</p>
                                                </div>
                                                    
                                            </div>


                                        ) : (

                                            <div key = {index} className="projectSectionMediaSectionVideosExpandableEntryContainer projectSectionMediaSectionVideosExpandableEntryContainer-Odd">

                                                <video 
                                                    controls={!canHover}
                                                    muted
                                                    playsInline
                                                    onMouseEnter={canHover ? (e) => e.currentTarget.play() : undefined}
                                                    onMouseLeave={canHover ? (e) => e.currentTarget.pause() : undefined}
                                                >

                                                    <source src={videoDownloads[index]} type="video/mp4" />
                                                    Your browser does not support the video tag.

                                                </video>

                                                <div className = "projectSectionMediaSectionVideosExpandableEntryInfoContainer">
                                                    <p>&#9654; {videoTitles[index]}</p>
                                                    <p>{videoSummaries[index]}</p>
                                                </div>
                                                    
                                            </div>

                                        )

                                    ) : (

                                        index < 3 ? (

                                            index % 2 === 0 ? (

                                                <div key = {index} className="projectSectionMediaSectionVideosExpandableEntryContainer projectSectionMediaSectionVideosExpandableEntryContainer-Even">

                                                    <video 
                                                        controls={!canHover}
                                                        muted
                                                        playsInline
                                                        onMouseEnter={canHover ? (e) => e.currentTarget.play() : undefined}
                                                        onMouseLeave={canHover ? (e) => e.currentTarget.pause() : undefined}
                                                    >

                                                        <source src={videoDownloads[index]} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>

                                                    <div className = "projectSectionMediaSectionVideosExpandableEntryInfoContainer">
                                                        <p>&#9654; {videoTitles[index]}</p>
                                                        <p>{videoSummaries[index]}</p>
                                                    </div>
                                                    
                                                </div>

                                            ) : (

                                                <div key = {index} className="projectSectionMediaSectionVideosExpandableEntryContainer projectSectionMediaSectionVideosExpandableEntryContainer-Odd">

                                                    <video 
                                                        controls={!canHover}
                                                        muted
                                                        playsInline
                                                        onMouseEnter={canHover ? (e) => e.currentTarget.play() : undefined}
                                                        onMouseLeave={canHover ? (e) => e.currentTarget.pause() : undefined}
                                                    >

                                                        <source src={videoDownloads[index]} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                        
                                                    </video>

                                                    <div className = "projectSectionMediaSectionVideosExpandableEntryInfoContainer">
                                                        <p>&#9654; {videoTitles[index]}</p>
                                                        <p>{videoSummaries[index]}</p>
                                                    </div>
                                                    
                                                </div>

                                            )

                                        ) : (

                                            null

                                        )

                                    )
                        
                                ))}

                                {openFullVideoSection ? (

                                    <button className="conditionalButton projectPageExpansionButton" onClick = {() => setOpenFullVideoSection(false)}> Collapse All Videos &#9650; </button>

                                ) : (

                                    <button className="conditionalButton projectPageExpansionButton" onClick = {() => setOpenFullVideoSection(true)}> Expand All Videos &#9660; </button>

                                )}

                            </>

                        ) : (

                            videoTitles.map((video, index) => (

                                <div key = {index} className="projectSectionMediaSectionVideosExpandableEntryContainer projectSectionMediaSectionVideosExpandableEntryContainer-Even">

                                    <video 
                                        controls={!canHover}
                                        muted
                                        playsInline
                                        onMouseEnter={canHover ? (e) => e.currentTarget.play() : undefined}
                                        onMouseLeave={canHover ? (e) => e.currentTarget.pause() : undefined}
                                    >

                                        <source src={videoDownloads[index]} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    <div className = "projectSectionMediaSectionVideosExpandableEntryInfoContainer">
                                        <p>&#9654; {videoTitles[index]}</p>
                                        <p>{videoSummaries[index]}</p>
                                    </div>
                                        
                                </div>

                            ))

                        )}

                    </div>
                
                    <h3 className="projectSectionSubsectionTitle"> External Links: </h3>
                    <div className = "projectSectionMediaSectionLinksContainer">
                        <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/Arcade.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                        <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/Arcade/releases/tag/v1.0.5" target="_blank" rel="noopener noreferrer"> Go to Arcade v1.0.5 </a>
                        <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/Arcade/releases" target="_blank" rel="noopener noreferrer"> Go to All Arcade Releases</a>
                    </div>

                </div>

                <button className = "teleportationButton projectPageJumpButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>
    
            </div>

            <div className="banner">
                <div className="bannerHorizontalLine"></div>
                <div className="bannerContentContainer bannerContentContainer-Arcade">
                    <h1 className = "bannerContentWords bannerContentWords-UpsideDown"> Arcade </h1>
                </div>
            </div>

        </div>

    )

}

export default Arcadescreen
