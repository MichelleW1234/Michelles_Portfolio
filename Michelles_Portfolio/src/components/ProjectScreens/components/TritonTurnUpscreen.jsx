import { Link } from "react-router-dom";

import TritonTurnup from "../../../images/TritonTurnup.svg";
import TritonTurnupDemo from "../../../images/TritonTurnupDemo.svg";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function TritonTurnUpscreen() {

  return (

    <>

        <div className="heading">
            <div className="titleContainer titleContainer-TritonTurnUp">
                <h1 className = "title"> TritonTurnUp </h1>
            </div>
            <div className="horizontalLine"></div>
        </div>

        <div className = "projectScreen">

            <Link className = "teleportationButton projectGeneralButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="projectSubTitle"> Project Details:</h2>
            <div className = "projectDetailsContainer">
                <div className="test">
                    <div className="testInner">
                        <h3 className="projectDetailsSubTitle">Features:</h3>
                        <div className = "projectDetailsInfoBlockContainer"> 
                            <p>&gt; In-app calendar that aggregates user-selected events into a personalized schedule </p>
                            <p>&gt; Card-based event carousel populated with web-scraped UCSD events, enabling users to browse, add to their schedule, or dismiss uninterested events</p>
                            <p>&gt; Authentication system supporting user-specific calendars and schedule management</p>
                            <p>&gt; Availability selection interface allowing users to mark weekly availability and automatically filter out incompatible events</p>
                        </div>
                    </div>

                    <div className="testInner">
                        <h3 className="projectDetailsSubTitle">My Role:</h3>
                        <div className = "projectDetailsInfoBlockContainer"> 
                            <p> &gt; Collaborated with an Agile team using GitHub for version control, while under mentorship from a professor with extensive software development expertise </p>
                            <p> &gt; Contributed to the planning, design, and development phases of building the web app, focusing primarily on the app's UI/UX and front-end </p>
                            <p> &gt; Conducted user research and usability testing to gain insights into user needs, behaviors, and product interactions </p>
                        </div>
                    </div>
                </div>

                <div className="test">

                    <div className="testInner">
                        <h3 className="projectDetailsSubTitle">Tools Used: </h3>
                        <div className = "projectDetailsInfoBlockContainer"> 
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
                    
                    <div className="testInner">
                        <h3 className="projectDetailsSubTitle"> Timeline: </h3>
                        <div className = "projectDetailsInfoBlockContainer">
                            <div className = "timelineContainerLarge"> 
                                <div className = "timelineContainerInner">
                                    <div className="timeline"><div className = "timeLineDot"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div></div>
                                    <p>&nbsp; 10/10/24 &#8594; First team meet-up and start of the planning stage</p>
                                </div>
                                <div className = "timelineContainerInner">
                                    <div className="timeline"><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDot"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div></div>
                                    <p>&nbsp; 10/17/24 &#8594; Team meet-up for the creation of vision document</p>
                                </div>
                                <div className = "timelineContainerInner">
                                    <div className="timeline"><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDot"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div></div>
                                    <p>&nbsp; 10/24/24 &#8594; Conducted user research interviews and pitched the app idea</p>
                                </div>
                                <div className = "timelineContainerInner">
                                    <div className="timeline"><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDot"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div></div>
                                    <p>&nbsp; 10/31/24 &#8594; Team meet-up for role delegation</p>
                                </div>
                                <div className = "timelineContainerInner">
                                    <div className="timeline"><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDot"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div></div>
                                    <p>&nbsp; 11/6/24 &#8594; First meeting with mentor to discuss progress</p>
                                </div>
                                <div className = "timelineContainerInner">
                                    <div className="timeline"><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDotDull"></div><hr className = "timeLineDash"/><div className = "timeLineDot"></div></div>
                                    <p>&nbsp; 12/6/24 &#8594; Project deadline and submission </p>
                                </div>
                            </div>

                            <div className = "timelineContainerSmall"> 
                                <div className = "timelineContainerInner">
                                    <p> &nbsp; 10/10/24 </p>
                                    <div className="timeline"><div className = "timeLineDot"></div><hr className = "timeLineDash"/></div>
                                    <p> &nbsp; First team meet-up and start of the planning stage</p>
                                </div>

                                <div className = "timelineContainerInner">
                                    <p>&nbsp; 10/17/24 </p>
                                    <div className="timeline"><div className = "timeLineDot"></div><hr className = "timeLineDash"/></div>
                                    <p> &nbsp; Team meet-up for the creation of vision document</p>
                                </div>
                                
                                <div className = "timelineContainerInner">
                                    <p>&nbsp; 10/24/24</p>
                                    <div className="timeline"><div className = "timeLineDot"></div><hr className = "timeLineDash"/></div>
                                    <p> &nbsp; Conducted user research interviews and pitched the app idea</p>
                                </div>
                                
                                <div className = "timelineContainerInner">
                                    <p>&nbsp; 10/31/24</p>
                                    <div className="timeline"><div className = "timeLineDot"></div><hr className = "timeLineDash"/></div>
                                    <p> &nbsp; Team meet-up for role delegation</p>
                                </div>
                                
                                <div className = "timelineContainerInner">
                                    <p> &nbsp; 11/6/24 </p>
                                    <div className="timeline"><div className = "timeLineDot"></div><hr className = "timeLineDash"/></div>
                                    <p> &nbsp; First meeting with mentor to discuss progress</p>
                                </div>

                                <div className = "timelineContainerInner">
                                    <p> &nbsp; 12/6/24 </p>
                                    <div className="timeline"><div className = "timeLineDot"></div><hr className = "timeLineDash"/></div>
                                    <p> &nbsp; Project deadline and submission </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <h2 className="projectSubTitle"> Project Media: </h2>
            <div className = "projectDetailsContainer">
                <h3 className="projectDetailsSubTitle"> Video Content: </h3>
                <div className="projectVideoSectionContainer">
                    <a className = "teleportationButton projectVideoCard" href="https://drive.google.com/file/d/1bjoVWfcJ89o7ha2sFHtFunMhr9dIxjtt/view" target="_blank">
                        <p>&#9654; Watch Demo Video </p> 
                        <div className="projectVideoCardInner">
                            <img src = {TritonTurnupDemo}/>
                            <p> A demonstration of our web application's core features, including user login, schedule-based filtering, entry browsing, and calendar integration. </p>
                        </div>
                    </a>
                </div>

                <h3 className="projectDetailsSubTitle"> External Links: </h3>
                <div className = "projectLinksContainer">
                    <a className = "teleportationButton projectLinkButton" href="https://github.com/MichelleW1234/CSE-110-Project.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                </div>
            </div>

            <button className = "teleportationButton projectGeneralButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>

        </div>

        <div className="heading">
            <div className="horizontalLine"></div>
            <div className="titleContainer titleContainer-TritonTurnUp">
                <h1 className = "title title-UpsideDown"> TritonTurnUp </h1>
            </div>
        </div>


    </>

  )
}

export default TritonTurnUpscreen
