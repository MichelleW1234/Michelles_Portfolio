import { Link } from "react-router-dom";

import TritonTurnup from "../../../images/TritonTurnup.svg";
import TritonTurnupDemo from "../../../images/TritonTurnupDemo.svg";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function UpDownTimescreen() {

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
                <div className="projectDetailsContainer">
                    <div className="projectDetailsModuleContainer">
                        <h3 className="projectGeneralModuleSubTitle">Features:</h3>
                        <div className = "projectDetailsContentContainer"> 
                            <p>&gt; Personalized calendar that aggregates user-selected events into a unified schedule </p>
                            <p>&gt; Interactive event carousel displaying web-scraped UCSD events with options to save or dismiss events </p>
                            <p>&gt; User authentication system supporting personalized calendars and schedule management </p>
                            <p>&gt; Weekly availability interface that automatically filters incompatible events</p>
                        </div>
                    </div>

                    <div className="projectDetailsModuleContainer">
                        <h3 className="projectGeneralModuleSubTitle">My Role:</h3>
                        <div className = "projectDetailsContentContainer"> 
                            <p> &gt; Collaborated in an Agile development team using GitHub for version control under faculty mentorship </p>
                            <p> &gt; Contributed to planning, design, and development with a focus on UI/UX and front-end implementation</p>
                            <p> &gt; Conducted user research and usability testing to understand user needs and improve product interactions </p>
                        </div>
                    </div>
                </div>

                <div className="projectDetailsContainer">

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
                            <div className = "projectTimelineContainerDesktop"> 
                                <div className = "projectTimelineEntryContainer">
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div></div>
                                    <p>&nbsp; 10/10/24 &#8594; First team meet-up and start of the planning stage</p>
                                </div>
                                <div className = "projectTimelineEntryContainer">
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div></div>
                                    <p>&nbsp; 10/17/24 &#8594; Team meet-up for the creation of vision document</p>
                                </div>
                                <div className = "projectTimelineEntryContainer">
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div></div>
                                    <p>&nbsp; 10/24/24 &#8594; Conducted user research interviews and pitched the app idea</p>
                                </div>
                                <div className = "projectTimelineEntryContainer">
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div></div>
                                    <p>&nbsp; 10/31/24 &#8594; Team meet-up for role delegation</p>
                                </div>
                                <div className = "projectTimelineEntryContainer">
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div></div>
                                    <p>&nbsp; 11/6/24 &#8594; First meeting with mentor to discuss progress</p>
                                </div>
                                <div className = "projectTimelineEntryContainer">
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePoint"></div></div>
                                    <p>&nbsp; 12/6/24 &#8594; Project deadline and submission </p>
                                </div>
                            </div>

                            <div className = "projectTimelineContainerMobile"> 
                                <div className = "projectTimelineEntryContainer">
                                    <p> &nbsp; 10/10/24 </p>
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div>
                                    <p> &nbsp; First team meet-up and start of the planning stage</p>
                                </div>

                                <div className = "projectTimelineEntryContainer">
                                    <p>&nbsp; 10/17/24 </p>
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div>
                                    <p> &nbsp; Team meet-up for the creation of vision document</p>
                                </div>
                                
                                <div className = "projectTimelineEntryContainer">
                                    <p>&nbsp; 10/24/24</p>
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div>
                                    <p> &nbsp; Conducted user research interviews and pitched the app idea</p>
                                </div>
                                
                                <div className = "projectTimelineEntryContainer">
                                    <p>&nbsp; 10/31/24</p>
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div>
                                    <p> &nbsp; Team meet-up for role delegation</p>
                                </div>
                                
                                <div className = "projectTimelineEntryContainer">
                                    <p> &nbsp; 11/6/24 </p>
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div>
                                    <p> &nbsp; First meeting with mentor to discuss progress</p>
                                </div>

                                <div className = "projectTimelineEntryContainer">
                                    <p> &nbsp; 12/6/24 </p>
                                    <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div>
                                    <p> &nbsp; Project deadline and submission </p>
                                </div>
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
