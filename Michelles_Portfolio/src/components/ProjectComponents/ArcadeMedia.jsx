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
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1itT-r8qzOpxL8ycP68o_mTaR5r3df0_5/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Tic-Tac-Toe </h1>
                    <img src={TTT} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1G1-qQOsNCnR1fLcU90JUTU1YSATrHiS4/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Snake </h1>
                    <img src={SNK} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1bJyr6_9ppj_n-CZUc6Mfu_QvU9LKVDFF/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1> Space Invasion (Mission 2) </h1>
                    <img src={SPIM2} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1PMqYoAfn5KjCgzxA8GleJkhOpkEiduIA/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Space Invasion (Mission 4) </h1>
                    <img src={SPIM4} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1uvP1URcV-x81uS1pL7QuaeocgXQI8IrS/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Orbit </h1>
                    <img src={ORB} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1tl4Ftc8BPBBZ43agDoBaMzcHdz-AzBXZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Color Blast </h1>
                    <img src={CBL} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/18aBmvXzR2ZxT-DHt1Ub5zUeEGhncZvrP/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Cat Claw Machine </h1>
                    <img src={CWMCat} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1QdOkZ2Cbgo2ADlFZQEhdspETOF3pvFOq/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Balloon Frenzy </h1>
                    <img src={BFR} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1DnQAkTpYU_WVV8fz-hDg8cp7eefU0glK/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1> Sky Maze </h1>
                    <img src={SMZ} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/13KZEZOFC3_hgTR6Rm7JOVH5W1sfypzL2/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
            </div>

            <button className = "closeButton" onClick={() => setArcadeMediaFlag(false)}>Close</button>
        </div>
    </div>

  )
}

export default ArcadeMedia
