import { Link } from "react-router-dom";

import TritonTurnup from "../../../images/TritonTurnup.svg";
import TritonTurnupDemo from "../../../images/TritonTurnupDemo.svg";

import { ScrollBackToTop } from "../helpers/Helpers";

import "./Projectscreen.css";


function TritonTurnUpscreen() {

  return (

    <>

        <div className="heading">
            <div className="projectTitleIconContainer">
                    <img className= "projectTitleImage" src={TritonTurnup}/> 
                    <h1 className = "title"> Triton </h1>
            </div>
            <div className="horizontalLine"></div>
        </div>

        <div className = "projectScreen">

            <Link className = "projectGeneralButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="projectSubTitle"> Project Details:</h2>
            <div className = "projectDetailsContainer">
                <h3 className="projectDetailsSubTitle"> Timeline: </h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p>10/10/24 ............... First team meet-up and start of the planning stage</p>
                    <p>10/17/24 ............... Team meet-up for the creation of vision document</p>
                    <p>10/24/24 ............... Conducted user research interviews and pitched the app idea</p>
                    <p>10/31/24 ............... Team meet-up for role delegation</p>
                    <p>11/6/24 ............... First meeting with mentor to discuss progress</p>
                    <p>12/6/24 ............... Project deadline and submission </p>
                </div>

                <h3 className="projectDetailsSubTitle">Features:</h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p>&gt; In-app calendar that aggregates user-selected events into a personalized schedule </p>
                    <p>&gt; Card-based event carousel populated with web-scraped UCSD events, enabling users to browse, add to their schedule, or dismiss uninterested events</p>
                    <p>&gt; Authentication system supporting user-specific calendars and schedule management</p>
                    <p>&gt; Availability selection interface allowing users to mark weekly availability and automatically filter out incompatible events</p>
                </div>

                <h3 className="projectDetailsSubTitle">My Role:</h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p> &gt; Collaborated with an Agile team using GitHub for version control, while under mentorship from a professor with extensive software development expertise </p>
                    <p> &gt; Contributed to the planning, design, and development phases of building the web app, focusing primarily on the app's UI/UX and front-end </p>
                    <p> &gt; Conducted user research and usability testing to gain insights into user needs, behaviors, and product interactions </p>
                </div>

            </div>

            <h2 className="projectSubTitle"> Video Content: </h2>
            <div className="projectVideoSectionContainer">
                <a className = "projectVideoCard" href="https://drive.google.com/file/d/1bjoVWfcJ89o7ha2sFHtFunMhr9dIxjtt/view" target="_blank">
                    Demo Video
                    <img src = {TritonTurnupDemo}/>
                </a>
            </div>

            <h2 className="projectSubTitle"> Project Links: </h2>
            <div className = "projectLinksContainer">
                <a className = "projectLinkButton" href="https://github.com/MichelleW1234/CSE-110-Project.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
            </div>

            <button className = "projectGeneralButton" onClick = {() => ScrollBackToTop()}> &#9650; Back to Top </button>

        </div>

    </>

  )
}

export default TritonTurnUpscreen
