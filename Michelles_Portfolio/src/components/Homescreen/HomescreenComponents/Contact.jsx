import "./Contact.css";
import Email from "../../../images/Email.svg";
import Linkedin from "../../../images/Linkedin.svg";
import GitHub from "../../../images/GitHub.svg";


function Contact() {

  return (
    <div className = "sectionContainer">

      <div className = "titleContainer contactContainer">

        
        <a className = "teleportationButton contactBox" href="mailto: michellew1822@gmail.com"> 
          <img src={Email}/>
        </a>
        <a className = "teleportationButton contactBox" href="https://www.linkedin.com/in/michelle-wee123/" target="_blank" rel="noopener noreferrer"> 
          <img src={Linkedin}/>
        </a>
        <a className = "teleportationButton contactBox" href="https://github.com/MichelleW1234" target="_blank" rel="noopener noreferrer"> 
          <img src={GitHub}/>
        </a>

      </div>

    </div>

  )
}

export default Contact
