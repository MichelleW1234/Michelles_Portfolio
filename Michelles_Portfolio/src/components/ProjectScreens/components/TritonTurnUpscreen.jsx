import { Link } from "react-router-dom";

import TritonTurnup from "../../../images/TritonTurnup.svg";
import TritonTurnupDemo from "../../../images/TritonTurnupDemo.svg";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function TritonTurnUpscreen() {

    const timeLineDates = ["10/10/24", "10/17/24", "10/24/24", "10/31/24", "11/6/24", "12/6/24"];
    const timeLineDescriptions = ["First team meet-up and start of the planning stage",
                                    "Team meet-up for the creation of vision document",
                                    "Conducted user research interviews and pitched the app idea",
                                    "Team meet-up for role delegation",
                                    "First meeting with mentor to discuss progress",
                                    "Project deadline and submission"
                                ];

  return (

    <div className="contentBody">

        <div className="banner">
            <div className="bannerContentContainer bannerContentContainer-TritonTurnUp">
                <h1 className = "bannerContentWords"> TritonTurnUp </h1>
            </div>
            <div className="bannerHorizontalLine"></div>
        </div>

        <div className = "projectScreen">

            <Link className = "teleportationButton projectPageJumpButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="sectionTitle"> Project Details:</h2>
            <div className = "projectSectionContainer">
                <div className="projectSectionDetailsRowContainer">
                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">Features:</h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer"> 
                            <p>&gt; Personalized calendar that aggregates user-selected events into a unified schedule </p>
                            <p>&gt; Interactive event carousel displaying web-scraped UCSD events with options to save or dismiss events </p>
                            <p>&gt; User authentication system supporting personalized calendars and schedule management </p>
                            <p>&gt; Weekly availability interface that automatically filters incompatible events</p>
                        </div>
                    </div>

                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">My Role:</h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer"> 
                            <p> &gt; Collaborated in an Agile development team using GitHub for version control under faculty mentorship </p>
                            <p> &gt; Contributed to planning, design, and development with a focus on UI/UX and front-end implementation</p>
                            <p> &gt; Conducted user research and usability projectSectionDetailsSectionGeneralContentTimelineEntryContainer to understand user needs and improve product interactions </p>
                        </div>
                    </div>
                </div>

                <div className="projectSectionDetailsRowContainer">
                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">Tools Used: </h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer"> 
                            <h4> &gt; Core Frameworks & Libraries: </h4>
                            <p> React, React Router, React Big Calendar </p>
                            <h4> &gt; Programming Languages: </h4>
                            <p> JavaScript, HTML, CSS, Python </p>
                            <h4> &gt; Build & Packaging: </h4>
                            <p> Vite, Node.js, npm </p>
                            <h4> &gt; Authentication / APIs: </h4>
                            <p> Google OAuth, Google APIs, JWT Authentication </p>
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
            </div>

            <h2 className="sectionTitle"> Project Media: </h2>
            <div className = "projectSectionContainer">
                <h3 className="projectSectionSubsectionTitle"> Video Content: </h3>
                <div className="projectSectionMediaSectionVideosExpandableContainer">
                    <a className = "teleportationButton projectSectionMediaSectionVideosExpandableEntryButton" href="https://drive.google.com/file/d/1bjoVWfcJ89o7ha2sFHtFunMhr9dIxjtt/view" target="_blank">
                        <p>&#9654; Watch Demo Video </p> 
                        <div className="projectSectionMediaSectionVideosExpandableEntryButtonDescriptionContainer">
                            <img src = {TritonTurnupDemo}/>
                            <p> A demonstration of our web application's core features, including user login, schedule-based filtering, entry browsing, and calendar integration. </p>
                        </div>
                    </a>
                </div>

                <h3 className="projectSectionSubsectionTitle"> External Links: </h3>
                <div className = "projectSectionMediaSectionLinksContainer">
                    <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/CSE-110-Project.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                </div>
            </div>

            <button className = "teleportationButton projectPageJumpButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>

        </div>

        <div className="banner">
            <div className="bannerHorizontalLine"></div>
            <div className="bannerContentContainer bannerContentContainer-TritonTurnUp">
                <h1 className = "bannerContentWords bannerContentWords-UpsideDown"> TritonTurnUp </h1>
            </div>
        </div>

    </div>

  )
}

export default TritonTurnUpscreen
