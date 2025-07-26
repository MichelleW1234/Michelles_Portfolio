import "./ArcadeMedia.css";

import RPS from "../../images/RPS.svg";
import TTT from "../../images/TTT.svg";
import SNK from "../../images/SNK.svg";
import SPIM2 from "../../images/SPIM2.svg";
import SPIM4 from "../../images/SPIM4.svg";
import ORB from "../../images/ORB.svg";
import CBL from "../../images/CBL.svg";
import BFR from "../../images/BFR.svg";
import CWMSpace from "../../images/CWMSpace.svg";



function ArcadeMedia({setArcadeMediaFlag}) {

  return (
    <div className = "ArcadeMediaContainer">
        <div className = "ArcadeMediaContentBox">
            <h1 className="ArcadeMediaText">
                These videos feature recorded gameplay footage:
            </h1>

            <div className = "ArcadeVideoOuterContainer">
                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Rock-Paper-Scissors </h1>
                    <img src={RPS} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1TtCJhs4V71gIpAqgmRbxftogLi1Ukpby/view" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Tic-Tac-Toe </h1>
                    <img src={TTT} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1T-fS0JvQ2eruQlr264VG4XUhk780sdGt/view" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Snake </h1>
                    <img src={SNK} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1Uy6nHKkwFnfnPs1TG81U0moABCRKQ_sI/view" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Space Invasion (Mission 2) </h1>
                    <img src={SPIM2} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/19_XIR7p5wALL9Uyd0By7wXL54CtMmIU2/view" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Space Invasion (Boss Fight) </h1>
                    <img src={SPIM4} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1AYX0f0KXGJNhV-vsqafiWKIdAATluYZy/view" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Orbit </h1>
                    <img src={ORB} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1zvz9bapvO7VCz57EJpUU6M0G3XkMaTRg/view" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Color Blast </h1>
                    <img src={CBL} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1Kjjpa7alUlvhrKfUlVKoDVFlYM0Bdhru/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Claw Machine (Space) </h1>
                    <img src={CWMSpace} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1_6mlQawc2_qW5ykNacaGuVQYiYEqETYp/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>

                <div className = "ArcadeVideoContainer">
                    <h1 className = "just_text"> Balloon Frenzy </h1>
                    <img src={BFR} className = "ArcadeImage"/>
                    <a className = "viewVideoButton" href="https://drive.google.com/file/d/1I3y5USoBHMHJS4NJMdKq36Jwc0dhkYSf/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> View </a>
                </div>
            </div>

            <button className = "closeButton" onClick={() => setArcadeMediaFlag(false)}>Close</button>
        </div>
    </div>

  )
}

export default ArcadeMedia
