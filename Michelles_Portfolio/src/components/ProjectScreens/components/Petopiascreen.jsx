import { Link } from "react-router-dom";
import {useState} from "react";

import Room from "../../../videos/Petopia/Room.mp4";
import Feeding from "../../../videos/Petopia/Feeding.mp4";
import Sleeping from "../../../videos/Petopia/Sleeping.mp4";
import Evolution from "../../../videos/Petopia/Evolution.mp4";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function Petopiascreen() {

    const videoTitles = ["Cat Room", "Feeding Activity", "Sleeping Pets", "Evolving Pets"];

    const videoDownloads = [Room, Feeding, Sleeping, Evolution];

    const videoSummaries = ["Layout of the cat room environment and some of its immersive elements",
                            "Demonstration of correctly doing the feeding activity for your pet when it's hungry",
                            "Clip of nighttime pet behavior and animations",
                            "Appearance and health capacity of fish in its 2nd stage of evolution"
                            ];

    const canHover = window.matchMedia("(hover: hover)").matches;

    const [openFullVideoSection, setOpenFullVideoSection] = useState(false);

  return (

    <div className="contentBody">

        <div className="banner">
            <div className="bannerContentContainer bannerContentContainer-Petopia">
                <h1 className = "bannerContentWords"> Petopia </h1>
            </div>
            <div className="bannerHorizontalLine"></div>
        </div>

        <div className = "projectContainer">

            <Link className = "teleportationButton projectPageJumpButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="sectionTitle"> Project Details:</h2>

            <div className = "projectSectionDetailsContainer">

                <div className="projectSectionSubsectionGeneralContainer">
                    <h3 className="projectSectionSubsectionTitle">Features:</h3>
                    <div className = "projectSectionDetailsSectionContentContainer"> 
                        <p>&gt; A virtual pet system supporting up to three pets across multiple species, each with unique traits, behaviors, and needs </p>
                        <p>&gt; Interactive care activities that influence pet needs, health, and behaviors </p>
                        <p>&gt; A real-time simulation system where pet needs, health, and behaviors evolve over time, including offline progression </p>
                        <p>&gt; A real-world day/night cycle where pets wake during the day and sleep at night </p>
                        <p>&gt; A save system that preserves pet progress, game state, and player data across sessions </p>
                        <p>&gt; Animated pixel-art visuals and interface animations for a retro-inspired experience </p>
                        <p>&gt; Sound effects and adjustable background music enhancing the game's atmosphere </p>
                        <p>&gt; An inventory and decorations for customizing pets’ rooms, unlocked through achievements. </p>
                    </div>
                </div>

                <div className="projectSectionSubsectionGeneralContainer">
                    <h3 className="projectSectionSubsectionTitle">Tools Used: </h3>
                    <div className = "projectSectionDetailsSectionContentContainer"> 
                        <h4> &gt; Core Frameworks & Libraries: </h4>
                        <p> React, Electron, React Router </p>
                        <h4> &gt; Programming Languages: </h4>
                        <p> JavaScript, HTML, CSS </p>
                        <h4> &gt; Build & Packaging: </h4>
                        <p> Vite, Node.js, npm, Electron Builder </p>
                        <h4> &gt; Development Tools: </h4>
                        <p> VSCode, GitHub </p>
                    </div>
                </div>
                
                <div className="projectSectionSubsectionGeneralContainer">
                    <h3 className="projectSectionSubsectionTitle"> Timeline: </h3>
                    <div className = "projectSectionDetailsSectionContentContainer">
                        <div className = "projectSectionDetailsSectionGeneralContentTimelineContainer"> 
                            <div className = "projectSectionDetailsSectionGeneralContentTimelineEntryContainer">
                                <div className="projectSectionDetailsSectionGeneralContentTimelineEntryDateContainer">
                                    <p> 12/2025 </p>
                                    <div className="projectSectionDetailsSectionGeneralContentTimelineEntryVisualContainer"><div className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualPoint"></div><hr className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualLine"/></div> 
                                </div>
                                <p> Project started </p>
                            </div>
                            <div className = "projectSectionDetailsSectionGeneralContentTimelineEntryContainer">
                                <div className="projectSectionDetailsSectionGeneralContentTimelineEntryDateContainer">
                                    <p> 07/2026 </p>
                                    <div className="projectSectionDetailsSectionGeneralContentTimelineEntryVisualContainer"><div className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualPoint"></div><hr className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualLine"/></div> 
                                </div>
                                <p> First Github release (Petopia V1.0.0 for Mac) </p>
                            </div>
                            <div className = "projectSectionDetailsSectionGeneralContentTimelineEntryContainer">
                                <div className="projectSectionDetailsSectionGeneralContentTimelineEntryDateContainer">
                                    <p> 08/2026 </p>
                                    <div className="projectSectionDetailsSectionGeneralContentTimelineEntryVisualContainer"><div className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualPoint"></div><hr className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualLine"/></div> 
                                </div>
                                <p> Second Github release (Petopia V1.0.1 for Mac) — First feature-complete build, refactoring planned </p>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>

            <h2 className="sectionTitle"> Project Media: </h2>
            
            <div className="projectSectionSubsectionGeneralContainer">
                <h3 className="projectSectionSubsectionTitle"> Video Content: </h3>
                <div className="projectSectionMediaSectionVideosExpandableContainer scrollableContainer">

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
                                                loop
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
                                                loop
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
                                                    loop
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
                                                    loop
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

                            <div key = {index} className="projectSectionMediaSectionVideosExpandableEntryContainer projectSectionMediaSectionVideosExpandableEntryContainer-Even scrollableEntryContainer">

                                <video 
                                    controls={!canHover}
                                    muted
                                    playsInline
                                    loop
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

            </div>

            <div className="projectSectionSubsectionGeneralContainer">
                <h3 className="projectSectionSubsectionTitle"> External Links: </h3>
                <div className = "projectSectionMediaSectionLinksContainer">
                    <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/Petopia" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                    <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/Petopia/releases/tag/v1.0.1" target="_blank" rel="noopener noreferrer"> Go to Petopia v1.0.1 </a>
                    <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/Petopia/releases" target="_blank" rel="noopener noreferrer"> Go to All Petopia Releases </a>
                </div>
            </div>

            <button className = "teleportationButton projectPageJumpButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>

        </div>

        <div className="banner">
            <div className="bannerHorizontalLine"></div>
            <div className="bannerContentContainer bannerContentContainer-Petopia">
                <h1 className = "bannerContentWords bannerContentWords-UpsideDown"> Petopia </h1>
            </div>
        </div>

    </div>

  )
}

export default Petopiascreen
