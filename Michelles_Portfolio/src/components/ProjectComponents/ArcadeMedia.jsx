import "./ArcadeMedia.css";

import RPS from "../../images/ArcadeMedia/RPS.svg";
import TTT from "../../images/ArcadeMedia/TTT.svg";
import SNK from "../../images/ArcadeMedia/SNK.svg";
import SPIM2 from "../../images/ArcadeMedia/SPIM2.svg";
import SPIM4 from "../../images/ArcadeMedia/SPIM4.svg";
import ORB from "../../images/ArcadeMedia/ORB.svg";
import CBL from "../../images/ArcadeMedia/CBL.svg";
import BFR from "../../images/ArcadeMedia/BFR.svg";
import SMZ from "../../images/ArcadeMedia/SMZ.svg";
import CHC from "../../images/ArcadeMedia/CHC.svg";
import CWMCat from "../../images/ArcadeMedia/CWMCat.svg";



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
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1PKd1yokX2N8gwBfoBmrSXMd78LamrNe4/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Tic-Tac-Toe </h1>
                    <img src={TTT} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1oC9cMNVnP8obfnl9CdFUADgZvoYY-Pr0/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Snake </h1>
                    <img src={SNK} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1MKFG1TzGLh8Z7JxC_nQKQuNq6L0rY9En/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Space Invasion (Mission 2) </h1>
                    <img src={SPIM2} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/19MIdDvHk1NA8qMBxPi1Nt79rWcKcn9B6/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Space Invasion (Mission 4) </h1>
                    <img src={SPIM4} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1tynR68oGVpyzWIjKWeJPbR9X2fhKHdCs/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Orbit </h1>
                    <img src={ORB} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/17g4-Q-iU4EJeOaiSFp-MUZ72ByeJZRs6/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Color Blast </h1>
                    <img src={CBL} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1OZeglTeHj6pRWC80RMbSqTUVOAuEoPHQ/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Cat Claw Machine </h1>
                    <img src={CWMCat} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1XQb_AFsKZTNP3dLgWG3g27lAoIngYN9t/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Balloon Frenzy </h1>
                    <img src={BFR} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1WbA9IL-9Gd6Jw6AEkmLVYZ8k-kchLq7Z/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Sky Maze </h1>
                    <img src={SMZ} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1npOK4lx2jSFZZAWbtdkZMMEEWV8ToRpx/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Chicken Crossing </h1>
                    <img src={CHC} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1SHa7hE9hJK2H53ZF5OWjO3HWp8SuR9yw/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
            </div>

            <button className = "closeButton" onClick={() => setArcadeMediaFlag(false)}>Close</button>
        </div>
    </div>

  )
}

export default ArcadeMedia
