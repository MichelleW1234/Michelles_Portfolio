import "../Projects.css";
import TritonTurnup from "../../images/TritonTurnup.svg";

function cardTwo() {

  return (
     <div className = "projectContainer">
        <h1 className = "projectTitle">
            TritonTurnUp
        </h1>
        <div className="horizontalLineProject"></div>
        <br/>
        <img className= "projectImage" src={TritonTurnup}/>
        <h1>
            Description:
        </h1>
        <p className = "projectText">
            Our web app, TritonTurnup, allows UCSD students to browse a detailed list of upcoming and ongoing events 
            affiliated with the school. Upon logging in, students can add these events to their calendars based on their 
            schedule availability, promoting socialization and stress relief by raising awareness of fun and engaging events 
            within the Triton community.
        </p>
        <h1>
            My Role:
        </h1>
        <p className = "projectText">
            &bull; Contributed to UI/UX and front-end in an Agile team using GitHub <br/> <br/>
            &bull; Conducted user research and testing to improve engagement <br/> <br/>
            &bull; Mentored by professor with extensive software development experience <br/> <br/>

        </p>
        <h1>
            Media:
        </h1>
        <div className = "projectMediaContainer">
            <a className = "projectButton" href="https://github.com/MichelleW1234/CSE-110-Project.git" target="_blank" rel="noopener noreferrer"> Go to GitHub Repository </a>
            <a className = "projectButton" href="https://drive.google.com/file/d/1bjoVWfcJ89o7ha2sFHtFunMhr9dIxjtt/view" target="_blank" rel="noopener noreferrer"> Watch Demo Video </a>
        </div>
    </div> 

  )
}

export default cardTwo
