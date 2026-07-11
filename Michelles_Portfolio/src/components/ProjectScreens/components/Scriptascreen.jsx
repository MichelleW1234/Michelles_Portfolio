import { Link } from "react-router-dom";

import ScriptaDemo from "../../../images/ScriptaDemo.png";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function Scriptascreen() {

  return (

    <div className="contentBody">
        
        <div className="banner">
            <div className="bannerContentContainer bannerContentContainer-Scripta">
                <h1 className = "bannerContentWords"> Scripta </h1>
            </div>
            <div className="bannerHorizontalLine"></div>
        </div>

        <div className="projectScreen">

            <Link className = "teleportationButton projectPageJumpButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="sectionTitle">Project Details:</h2>            
            <div className = "projectSectionContainer">
                <div className="projectSectionDetailsRowContainer">
                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">Features: </h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer"> 
                            <p>&gt; Rich text editor with customizable fonts, sizes, colors, page backgrounds, and title styling </p>
                            <p>&gt; Interactive image import system with adjustable image sizing within documents </p>
                            <p>&gt; Document management system for creating, saving, reopening, searching, and deleting documents with trash support </p>
                            <p>&gt; Keyboard input mapping for seamless application navigation and interaction </p>
                        </div>
                    </div>

                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">Tools Used: </h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer"> 
                            <h4> &gt; Core Frameworks & Libraries: </h4>
                            <p> React, Electron, React Router, React ContentEditable </p>
                            <h4> &gt; Programming Languages: </h4>
                            <p> JavaScript, HTML, CSS </p>
                            <h4> &gt; Build & Packaging: </h4>
                            <p> Vite, Node.js, npm, Electron Builder </p>
                            <h4> &gt; Development Tools: </h4>
                            <p> VSCode, GitHub</p>
                        </div>
                    </div>
                </div>

                <div className="projectSectionDetailsRowContainer">
                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle"> Timeline: </h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer">
                            <div className = "projectSectionDetailsSectionGeneralContentTimelineContainer"> 
                                <div className = "projectSectionDetailsSectionGeneralContentTimelineEntryContainer">
                                    <div className="projectSectionDetailsSectionGeneralContentTimelineEntryDateContainer">
                                        <p> 10/2025 </p>
                                        <div className="projectSectionDetailsSectionGeneralContentTimelineEntryVisualContainer"><div className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualPoint"></div><hr className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualLine"/></div> 
                                    </div>
                                    <p> Project started </p>
                                </div>

                                <div className = "projectSectionDetailsSectionGeneralContentTimelineEntryContainer">
                                    <div className="projectSectionDetailsSectionGeneralContentTimelineEntryDateContainer">
                                        <p> 12/2025 </p>
                                        <div className="projectSectionDetailsSectionGeneralContentTimelineEntryVisualContainer"><div className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualPoint"></div><hr className = "projectSectionDetailsSectionGeneralContentTimelineEntryVisualLine"/></div> 
                                    </div>
                                    <p> First Github release (Scripta V1.0.0 for Mac) </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="sectionTitle"> Project Media: </h2>
            <div className = "projectSectionContainer">
                <h3 className="projectSectionSubsectionTitle"> Video Content: </h3>
                <div className="projectSectionMediaSectionVideosExpandableContainer">
                    <a className = "teleportationButton projectSectionMediaSectionVideosExpandableEntryButton" href="https://drive.google.com/file/d/18kaJoc-IkkRINIQjO2polFLivxWjDAy5/view?usp=drive_link" target="_blank">
                        <p>&#9654; Watch Demo Video </p> 
                        <div className="projectSectionMediaSectionVideosExpandableEntryButtonDescriptionContainer">
                            <img src = {ScriptaDemo}/>
                            <p> A demonstration of the app’s document system, including creating documents, editing content, adding text and importing images, saving files, using the search bar, and removing documents. </p>
                        </div>
                    </a>
                </div>

                <h3 className="projectSectionSubsectionTitle"> External Links: </h3>
                <div className = "projectSectionMediaSectionLinksContainer">
                    <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/Scripta" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                    <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href="https://github.com/MichelleW1234/Scripta/releases/tag/v.1.0.0" target="_blank" rel="noopener noreferrer"> Go to Scripta v1.0.0 </a>
                </div>
            </div>

            <button className = "teleportationButton projectPageJumpButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>

        </div>

        <div className="banner">
            <div className="bannerHorizontalLine"></div>
            <div className="bannerContentContainer bannerContentContainer-Scripta">
                <h1 className = "bannerContentWords bannerContentWords-UpsideDown"> Scripta </h1>
            </div>
        </div>

    </div>

  )
}

export default Scriptascreen
