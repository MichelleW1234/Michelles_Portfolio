import "./ArcadeMedia.css";

import RPS from "../../images/RPS.svg";
import TTT from "../../images/TTT.svg";
import SNK from "../../images/SNK.svg";
import SPIM2 from "../../images/SPIM2.svg";
import SPIM4 from "../../images/SPIM4.svg";
import ORB from "../../images/ORB.svg";
import CBL from "../../images/CBL.svg";
import BFR from "../../images/BFR.svg";
import SMZ from "../../images/SMZ.svg";
import CWMCat from "../../images/CWMCat.svg";



function ArcadeMedia({setArcadeMediaFlag}) {

  return (
    <div className = "ArcadeMediaContainer">
        <div className = "ArcadeMediaContentBox">
            <h1 className="ArcadeMediaText">
                These videos feature recorded gameplay footage:
            </h1>

            <div className = "ArcadeVideoOuterContainer">
                <div className = "ArcadeVideoContainer">
                    <h1> Rock-Paper-Scissors </h1>
                    <img src={RPS} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1o-giQdhc61DFY08yz82H1VEzi8UfUZsJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Tic-Tac-Toe </h1>
                    <img src={TTT} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1UyKZxbinUKE2X8pM_fFvlVjTZvpsVyJI/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Snake </h1>
                    <img src={SNK} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1oam-uHepIa7zWA7EvH7w5v0HfKAxOosk/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Space Invasion (Mission 2) </h1>
                    <img src={SPIM2} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1tXgaclA4WkAWpsFbV5lvgFitexaQeLJF/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Space Invasion (Mission 4) </h1>
                    <img src={SPIM4} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1RpXGuRXFRX5zm5Haaed6UYuHYLuS1Syy/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Orbit </h1>
                    <img src={ORB} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1-BV0zDa3cVebM82fRSUpcK7bm0u56aJv/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Color Blast </h1>
                    <img src={CBL} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1eFq1fzGNcROu9m8OMUnDwbjL_Xd9xFI-/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Cat Claw Machine </h1>
                    <img src={CWMCat} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1QdOkZ2Cbgo2ADlFZQEhdspETOF3pvFOq/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Balloon Frenzy </h1>
                    <img src={BFR} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/18LMqMI-O7pHjnbYh39AqosJstiT6CBLG/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Sky Maze </h1>
                    <img src={SMZ} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1p1rTGx6sZHUntdlewUWeI9DlxS38QHm9/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
            </div>

            <button className = "closeButton" onClick={() => setArcadeMediaFlag(false)}>Close</button>
        </div>
    </div>

  )
}

export default ArcadeMedia
