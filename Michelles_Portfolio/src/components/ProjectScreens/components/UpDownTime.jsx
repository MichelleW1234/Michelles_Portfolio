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


    const linkNames = ["itch.io Link", "Pitch Deck", "Art Document", "Random Events Planning Document"];
    const linkSRCs = ["https://squishyj.itch.io/updowntime",
                        "https://drive.google.com/file/d/1P1_HCZufYDgggQi4ml9hq6coI1CHjwJM/view?usp=drive_link",
                        "https://docs.google.com/presentation/d/1m-VsPORp_hXcN7x8O754oy7ohMRxLBSgSAPPPQQS96I/edit?usp=drive_link",
                        "https://docs.google.com/spreadsheets/d/1CIlsSRRRqLR4woOn2dSekh14PQ_vB9SKi59yZosp6eU/edit?usp=drive_link"
                    ];


  return (

    <div className="contentBody">

        <div className="banner">
            <div className="bannerContentContainer bannerContentContainer-UpDownTime">
                <h1 className = "bannerContentWords"> UpDownTime </h1>
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
                            <p>&gt; Custom 2D game world featuring animations and environment design </p>
                            <p>&gt; Combat system supporting player attacks, enemy encounters, dodging mechanics, and keyboard-controlled movement </p>
                            <p>&gt; Enemy AI system with proximity-based player detection and chase mechanics </p>
                            <p>&gt; Random event system that alters the environment, enemy abilities, and player abilities throughout gameplay </p>
                            <p>&gt; Story-driven introduction sequence featuring an animated opening narrative </p>
                            <p>&gt; Integrated audio system with sound effects and background music for immersive gameplay </p>
                        </div>
                    </div>

                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">My Role:</h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer"> 
                            <p> &gt; Served on the programming team, contributing to both the planning and development of the game </p>
                            <p> &gt; Collaborated during the planning phase to design dynamic environmental events and gameplay conditions</p>
                            <p> &gt; Developed gameplay systems in Unity using C# scripting and Unity's physics engine to implement core game mechanics </p>
                            <p> &gt; Debugged and refined gameplay systems in preparation for public project showcases </p>
                        </div>
                    </div>
                </div>

                <div className="projectSectionDetailsRowContainer">
                    <div className="projectSectionDetailsSectionGeneralContainer">
                        <h3 className="projectSectionSubsectionTitle">Tools Used: </h3>
                        <div className = "projectSectionDetailsSectionGeneralContentContainer"> 
                            <h4> &gt; Core Frameworks & Libraries: </h4>
                            <p> Unity, Unity Input System, Universal Render Pipeline (URP), Unity 2D Animation, Unity Tilemap </p>
                            <h4> &gt; Programming Languages: </h4>
                            <p> C# </p>
                            <h4> &gt; Development Tools: </h4>
                            <p> Unity Physics 2D, Unity Timeline, VSCode, GitHub</p>
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
                <h3 className="projectSectionSubsectionTitle"> External Links: </h3>

                <div className = "projectSectionMediaSectionLinksContainer">
                    {linkSRCs.map((item, index) => (

                        <a className = "teleportationButton projectSectionMediaSectionLinksEntryButton" href={linkSRCs[index]} target="_blank" rel="noopener noreferrer"> {linkNames[index]} </a>

                    ))}
                </div>
               
            </div>

            <button className = "teleportationButton projectPageJumpButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>

        </div>

        <div className="banner">
            <div className="bannerHorizontalLine"></div>
            <div className="bannerContentContainer bannerContentContainer-UpDownTime">
                <h1 className = "bannerContentWords bannerContentWords-UpsideDown"> UpDownTime </h1>
            </div>
        </div>

    </div>

  )
}

export default UpDownTimescreen
