import { Link } from "react-router-dom";

import ScriptaDemo from "../../../images/ScriptaDemo.png";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function Scriptascreen() {

  return (

    <div className="contentBody">
        
        <div className="heading">
            <div className="titleContainer titleContainer-Scripta">
                <h1 className = "title"> Scripta </h1>
            </div>
            <div className="horizontalLine"></div>
        </div>

        <div className="projectScreen">

            <Link className = "teleportationButton projectPageJumpButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="subTitle">Project Details:</h2>            
            <div className = "projectGeneralModuleContainer">
                <div className="projectDetailsContainer">
                    <div className="projectDetailsModuleContainer">
                        <h3 className="projectGeneralModuleSubTitle">Features: </h3>
                        <div className = "projectDetailsContentContainer"> 
                            <p>&gt; Rich text editor with customizable fonts, sizes, colors, page backgrounds, and title styling </p>
                            <p>&gt; Interactive image import system with adjustable image sizing within documents </p>
                            <p>&gt; Document management system for creating, saving, reopening, searching, and deleting documents with trash support </p>
                            <p>&gt; Keyboard input mapping for seamless application navigation and interaction </p>
                        </div>
                    </div>

                    <div className="projectDetailsModuleContainer">
                        <h3 className="projectGeneralModuleSubTitle">Tools Used: </h3>
                        <div className = "projectDetailsContentContainer"> 
                            <h4> &gt; Core Frameworks & Libraries: </h4>
                            <p> React, Electron, React Router, React ContentEditable </p>
                            <h4> &gt; Programming Languages: </h4>
                            <p> JavaScript, HTML, CSS </p>
                            <h4> &gt; Build & Packaging: </h4>
                            <p> Vite, Node.js, npm, Electron Builder </p>
                        </div>
                    </div>
                </div>

                <h3 className="projectGeneralModuleSubTitle"> Timeline: </h3>
                <div className = "projectDetailsContentContainer">
                    <div className = "projectTimelineContainerDesktop"> 
                        <div className = "projectTimelineEntryContainer">
                            <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePointDull"></div></div>
                            <p>&nbsp; 10/2025 &#8594; Project started</p>
                        </div>
                        <div className = "projectTimelineEntryContainer">
                            <div className="projectTimelineMapContainer"><div className = "projectTimelinePointDull"></div><hr className = "projectTimelineLine"/><div className = "projectTimelinePoint"></div></div>
                            <p>&nbsp; 12/2025 &#8594; First Github release (Scripta V1.0.0 for Mac)</p>
                        </div>
                    </div>

                    <div className = "projectTimelineContainerMobile"> 
                        <div className = "projectTimelineEntryContainer">
                            <p> &nbsp; 10/2025 </p>
                            <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div>
                            <p> &nbsp; Project started</p>
                        </div>

                        <div className = "projectTimelineEntryContainer">
                            <p>&nbsp; 12/2025 </p>
                            <div className="projectTimelineMapContainer"><div className = "projectTimelinePoint"></div><hr className = "projectTimelineLine"/></div>
                            <p> &nbsp; First Github release (Scripta V1.0.0 for Mac)</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="subTitle"> Project Media: </h2>
            <div className = "projectGeneralModuleContainer">
                <h3 className="projectGeneralModuleSubTitle"> Video Content: </h3>
                <div className="projectExpandableVideoContainer">
                    <a className = "teleportationButton projectVideoEntryButton" href="https://drive.google.com/file/d/18kaJoc-IkkRINIQjO2polFLivxWjDAy5/view?usp=drive_link" target="_blank">
                        <p>&#9654; Watch Demo Video </p> 
                        <div className="projectVideoEntryButtonDescriptionContainer">
                            <img src = {ScriptaDemo}/>
                            <p> A demonstration of the app’s document system, including creating documents, editing content, adding text and importing images, saving files, using the search bar, and removing documents. </p>
                        </div>
                    </a>
                </div>

                <h3 className="projectGeneralModuleSubTitle"> External Links: </h3>
                <div className = "projectLinksContainer">
                    <a className = "teleportationButton projectLinkEntryButton" href="https://github.com/MichelleW1234/Scripta" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                    <a className = "teleportationButton projectLinkEntryButton" href="https://github.com/MichelleW1234/Scripta/releases/tag/v.1.0.0" target="_blank" rel="noopener noreferrer"> Go to Scripta v1.0.0 </a>
                </div>
            </div>

            <button className = "teleportationButton projectPageJumpButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>

        </div>

        <div className="heading">
            <div className="horizontalLine"></div>
            <div className="titleContainer titleContainer-Scripta">
                <h1 className = "title title-UpsideDown"> Scripta </h1>
            </div>
        </div>

    </div>

  )
}

export default Scriptascreen
