import { Link } from "react-router-dom";

import TritonTurnup from "../../../images/TritonTurnup.svg";
import TritonTurnupDemo from "../../../images/TritonTurnupDemo.svg";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function UpDownTimescreen() {

    const timeLineDates = ["1/13/26", "1/17/26", "1/24/26", "1/30/26", "1/31/26", "2/7/26", "2/14/26", "2/17/26", "2/24/26", "2/26/26"];
    const timeLineDescriptions = ["First group meet up",
                                "Sprint 1", 
                                "Sprint 2",
                                "Prototype due",
                                "Sprint 3",
                                "Sprint 4",
                                "Sprint 5",
                                "Playtest showcase",
                                "Game deadline",
                                "Final game showcase"];

  return (

    <div className="contentBody">

        <div className="heading">
            <div className="titleContainer titleContainer-UpDownTime">
                <h1 className = "title"> UpDownTime </h1>
            </div>
            <div className="horizontalLine"></div>
        </div>

        <div className = "projectScreen">

            <Link className = "teleportationButton projectPageJumpButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="subTitle"> Project Details:</h2>
            <div className = "projectGeneralModuleContainer">
                <div className="projectDetailsRowContainer">
                    <div className="projectDetailsModuleContainer">
                        <h3 className="projectGeneralModuleSubTitle">Features:</h3>
                        <div className = "projectDetailsContentContainer"> 
                            <p>&gt; Custom 2D game world featuring animations and environment design </p>
                            <p>&gt; Combat system supporting player attacks, enemy encounters, dodging mechanics, and keyboard-controlled movement </p>
                            <p>&gt; Enemy AI system with proximity-based player detection and chase mechanics </p>
                            <p>&gt; Random event system that alters the environment, enemy abilities, and player abilities throughout gameplay </p>
                            <p>&gt; Story-driven introduction sequence featuring an animated opening narrative </p>
                            <p>&gt; Integrated audio system with sound effects and background music for immersive gameplay </p>
                        </div>
                    </div>

                    <div className="projectDetailsModuleContainer">
                        <h3 className="projectGeneralModuleSubTitle">My Role:</h3>
                        <div className = "projectDetailsContentContainer"> 
                            <p> &gt; Collaborated in an Agile development team using GitHub for version control </p>
                            <p> &gt; Contributed to planning, design, and development with a focus on UI/UX and front-end implementation</p>
                            <p> &gt; Conducted user research and usability projectTimelineEntryContainer to understand user needs and improve product interactions </p>
                        </div>
                    </div>
                </div>
 <div className="projectDetailsRowContainer"></div>
                <div className="projectDetailsRowContainer">
                    <div className="projectDetailsModuleContainer">
                        <h3 className="projectGeneralModuleSubTitle">Tools Used: </h3>
                        <div className = "projectDetailsContentContainer"> 
                            <h4> &gt; Core Frameworks & Libraries: </h4>
                            <p> React, React Router, React Big Calendar </p>
                            <h4> &gt; Programming Languages: </h4>
                            <p> JavaScript, HTML, CSS, Python </p>
                            <h4> &gt; Build & Packaging: </h4>
                            <p> Vite, Node.js, npm </p>
                            <h4> &gt; Authentication / APIs: </h4>
                            <p> Google OAuth, Google APIs, JWT Authentication </p>
                        </div>
                    </div>
                    
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
                    <a className = "teleportationButton projectVideoEntryButton" href="https://drive.google.com/file/d/1bjoVWfcJ89o7ha2sFHtFunMhr9dIxjtt/view" target="_blank">
                        <p>&#9654; Watch Demo Video </p> 
                        <div className="projectVideoEntryButtonDescriptionContainer">
                            <img src = {TritonTurnupDemo}/>
                            <p> A demonstration of our web application's core features, including user login, schedule-based filtering, entry browsing, and calendar integration. </p>
                        </div>
                    </a>
                </div>

                <h3 className="projectGeneralModuleSubTitle"> External Links: </h3>
                <div className = "projectLinksContainer">
                    <a className = "teleportationButton projectLinkEntryButton" href="https://github.com/MichelleW1234/CSE-110-Project.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                </div>
            </div>

            <button className = "teleportationButton projectPageJumpButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>

        </div>

        <div className="heading">
            <div className="horizontalLine"></div>
            <div className="titleContainer titleContainer-UpDownTime">
                <h1 className = "title title-UpsideDown"> UpDownTime </h1>
            </div>
        </div>

    </div>

  )
}

export default UpDownTimescreen
