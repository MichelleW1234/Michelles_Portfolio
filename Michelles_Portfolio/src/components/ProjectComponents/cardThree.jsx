import "../Projects.css";
import { useState } from 'react';
import Scripta from "../../images/Scripta.svg";

function cardThree() {
    const [ArcadeMediaFlag, setArcadeMediaFlag] = useState(false);

  return (
    <div className = "projectContainer">
        <h1 className = "projectTitle">
            Scripta
        </h1>
        <div className="horizontalLineProject"></div>
        <br/>
        <img className= "projectImage" src={Scripta}/>
        <h1>
            Description:
        </h1>
        <ul className = "projectText">
            <li>Developed a React-based document editor that allows users to create and edit plain text with enhanced capabilities such as dynamic customization options, including font styles, font sizes, text color, page background color, and title styling </li>
            <li>Enabled image import support with slider-based size controls to adjust image dimensions within documents</li>
            <li>Implemented document management functionality to create, save, reopen, search, and delete documents (with trash support) directly within the application</li>
            <li>Designed an interactive, responsive UI using React, JavaScript, and CSS to deliver a smooth and visually polished editing experience</li>
        </ul>
        <h1>
            Media:
        </h1>
        <div className = "projectMediaContainer">
            <a className = "projectButton" href="https://github.com/MichelleW1234/Scripta" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
            <a className = "projectButton" href="https://github.com/MichelleW1234/Scripta/releases/tag/v.1.0.0" target="_blank" rel="noopener noreferrer"> Go to Scripta v1.0.0 </a>
            <a className = "projectButton" href="https://drive.google.com/file/d/18kaJoc-IkkRINIQjO2polFLivxWjDAy5/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> Watch Demo Video</a>
        </div>

        {ArcadeMediaFlag === true ? (

            <ArcadeMedia
                setArcadeMediaFlag = {setArcadeMediaFlag}
            />

        ) : (

            null

        )}


    </div>

  )
}

export default cardThree
