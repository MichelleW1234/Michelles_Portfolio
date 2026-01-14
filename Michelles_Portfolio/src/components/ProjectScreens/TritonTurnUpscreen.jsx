import { Link } from "react-router-dom";

import TritonTurnup from "../../images/TritonTurnup.svg";
import TritonTurnupDemo from "../../images/TritonTurnupDemo.svg";

import "./Projectscreen.css";


function TritonTurnUpscreen() {

  return (

    <div className = "portfolioContentScreen">

        <div className="heading">
            <div className="projectTitleIconContainer">
                    <img className= "projectTitleImage" src={TritonTurnup}/> 
                    <h1 className = "title"> TritonTurnUp </h1>
            </div>
            <div className="horizontalLine"></div>
        </div>

        <div className = "projectScreen">

            <Link className = "projectButton" to = "/home"> Back </Link>

            <h2 className="projectSubTitle"> Project Details:</h2>
            <div className = "projectInfoContainer">
                <h3>Description:</h3>
                <p>
                    Our web app, TritonTurnup, allows UCSD students to browse a detailed list of upcoming and ongoing events 
                    affiliated with the school. Upon logging in, students can add these events to their calendars based on their 
                    schedule availability, promoting socialization and stress relief by raising awareness of fun and engaging events 
                    within the Triton community.
                </p>
            </div>
            <div className = "projectInfoContainer">
                <h3>My Role:</h3>
                <p>&gt; Contributed to UI/UX and front-end in an Agile team using GitHub</p>
                <p>&gt; Conducted user research and testing to improve engagement</p>
                <p>&gt; Mentored by professor with extensive software development experience</p>
            </div>

            <h2 className="projectSubTitle"> Video Content: </h2>
            <div className="projectVideoSectionContainer">
                <a className = "projectVideoCard" href="https://drive.google.com/file/d/1bjoVWfcJ89o7ha2sFHtFunMhr9dIxjtt/view" target="_blank">
                    Demo Video
                    <img src = {TritonTurnupDemo}/>
                </a>
            </div>

            <h2 className="projectSubTitle"> Project Links: </h2>
            <a className = "projectButton" href="https://github.com/MichelleW1234/CSE-110-Project.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>

        </div>

    </div>

  )
}

export default TritonTurnUpscreen
