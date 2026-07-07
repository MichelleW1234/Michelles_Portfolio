import { Link } from "react-router-dom";

import Scripta from "../../../images/Scripta.svg";
import ScriptaDemo from "../../../images/ScriptaDemo.svg";

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
            <div className = "projectModuleContainer">
                <div className="projectDetailsContainer">
                    <div className="projectDetailsModuleContainer">
                        <h3 className="projectModuleSubTitle">Features: </h3>
                        <div className = "projectDetailsInfoBlockContainer"> 
                            <p>&gt; Editable text interface allowing users to create and edit plain text with enhanced capabilities such as dynamic customization options that include font styles, font sizes, text color, page background color, and title styling </p>
                            <p>&gt; Interactive image import system with size controls to adjust image dimensions within documents </p>
                            <p>&gt; Document management functionality to create, save, reopen, search, and delete documents (with trash support) directly within the application </p>
                            <p>&gt; Mapped keyboard controls for seamless navigation and interaction within the app </p>
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
                            <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePointDull"></div></div>
                            <p>&nbsp; 10/2025 &#8594; Project started</p>
                        </div>
                        <div className = "projectTimelineContainerInner">
                            <div className="projectTimeline"><div className = "projectprojectTimelinePointDull"></div><hr className = "projectTimelineDash"/><div className = "projectprojectTimelinePoint"></div></div>
                            <p>&nbsp; 12/2025 &#8594; First Github release (Scripta V1.0.0 for Mac)</p>
                        </div>
                    </div>

                    <div className = "projectTimelineContainerSmall"> 
                        <div className = "projectTimelineContainerInner">
                            <p> &nbsp; 10/2025 </p>
                            <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/></div>
                            <p> &nbsp; Project started</p>
                        </div>

                        <div className = "projectTimelineContainerInner">
                            <p>&nbsp; 12/2025 </p>
                            <div className="projectTimeline"><div className = "projectprojectTimelinePoint"></div><hr className = "projectTimelineDash"/></div>
                            <p> &nbsp; First Github release (Scripta V1.0.0 for Mac)</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="subTitle"> Project Media: </h2>
            <div className = "projectModuleContainer">
                <h3 className="projectModuleSubTitle"> Video Content: </h3>
                <div className="projectVideoSectionContainer">
                    <a className = "teleportationButton projectVideoCard" href="https://drive.google.com/file/d/18kaJoc-IkkRINIQjO2polFLivxWjDAy5/view?usp=drive_link" target="_blank">
                        <p>&#9654; Watch Demo Video </p> 
                        <div className="projectVideoCardInner">
                            <img src = {ScriptaDemo}/>
                            <p> A demonstration of the app’s document system, including creating documents, editing content, adding text and importing images, saving files, using the search bar, and removing documents. </p>
                        </div>
                    </a>
                </div>

                <h3 className="projectModuleSubTitle"> External Links: </h3>
                <div className = "projectLinksContainer">
                    <a className = "teleportationButton projectLinkButton" href="https://github.com/MichelleW1234/Scripta" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                    <a className = "teleportationButton projectLinkButton" href="https://github.com/MichelleW1234/Scripta/releases/tag/v.1.0.0" target="_blank" rel="noopener noreferrer"> Go to Scripta v1.0.0 </a>
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
