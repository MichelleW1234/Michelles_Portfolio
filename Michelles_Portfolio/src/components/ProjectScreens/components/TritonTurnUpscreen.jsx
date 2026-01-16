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
                    <h1 className = "title"> TritonTurnUp </h1>
            </div>
            <div className="horizontalLine"></div>
        </div>

        <div className = "projectScreen">

            <Link className = "projectGeneralButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="projectSubTitle"> Project Details:</h2>
            <div className = "projectDetailsContainer">
                <h3 className="projectDetailsSubTitle"> Timeline: </h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p>&gt; Add stuff here</p>
                </div>

                <h3 className="projectDetailsSubTitle">Features:</h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p>&gt; Add stuff here</p>
                </div>

                <h3 className="projectDetailsSubTitle">My Role:</h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p>&gt; Contributed to UI/UX and front-end in an Agile team using GitHub</p>
                    <p>&gt; Conducted user research and testing to improve engagement</p>
                    <p>&gt; Mentored by professor with extensive software development experience</p>
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
