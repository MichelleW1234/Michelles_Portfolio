import { Link } from "react-router-dom";

import Scripta from "../../images/Scripta.svg";
import ScriptaDemo from "../../images/ScriptaDemo.svg";

import "./Projectscreen.css";


function Scriptascreen() {

  return (

    <>
        <div className="heading">
            <div className="projectTitleIconContainer">
                <img className= "projectTitleImage" src={Scripta}/>
                <h1 className = "title"> Scripta </h1>
            </div>
            <div className="horizontalLine"></div>
        </div>

        <div className="projectScreen">

            <Link className = "projectGeneralButton" to = "/home"> &lt; Back to Home </Link>

            <h2 className="projectSubTitle">Description:</h2>            
            <div className = "projectDetailsContainer">

                <h3 className="projectDetailsSubTitle"> Timeline: </h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p>&gt; Add stuff here</p>
                </div>

                <h3 className="projectDetailsSubTitle">Features: </h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p>&gt; Developed a React-based document editor that allows users to create and edit plain text with enhanced capabilities such as dynamic customization options, including font styles, font sizes, text color, page background color, and title styling </p>
                    <p>&gt; Enabled image import support with slider-based size controls to adjust image dimensions within documents </p>
                    <p>&gt; Implemented document management functionality to create, save, reopen, search, and delete documents (with trash support) directly within the application </p>
                    <p>&gt; Designed an interactive, responsive UI using React, JavaScript, and CSS to deliver a smooth and visually polished editing experience </p>
                </div>

                <h3 className="projectDetailsSubTitle">Tools Used: </h3>
                <div className = "projectDetailsInfoBlockContainer"> 
                    <p>&gt; Add stuff here</p>
                </div>
            </div>

            <h2 className="projectSubTitle"> Video Content: </h2>
            <div className="projectVideoSectionContainer">
                <a className = "projectVideoCard" href="https://drive.google.com/file/d/18kaJoc-IkkRINIQjO2polFLivxWjDAy5/view?usp=drive_link" target="_blank">
                    Demo Video
                    <img src = {ScriptaDemo}/>
                </a>
            </div>


            <h2 className="projectSubTitle">
                Project Links:
            </h2>
            <div className = "projectLinksContainer">
                <a className = "projectLinkButton" href="https://github.com/MichelleW1234/Scripta" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
                <a className = "projectLinkButton" href="https://github.com/MichelleW1234/Scripta/releases/tag/v.1.0.0" target="_blank" rel="noopener noreferrer"> Go to Scripta v1.0.0 </a>
            </div>

        </div>

    </>

  )
}

export default Scriptascreen
