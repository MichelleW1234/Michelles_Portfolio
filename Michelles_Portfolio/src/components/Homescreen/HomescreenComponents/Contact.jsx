import "./Contact.css";
import Email from "../../../images/Email.svg";
import Linkedin from "../../../images/Linkedin.svg";
import GitHub from "../../../images/GitHub.svg";


function Contact() {

  return (
    <div className = "contactSection">

      <h2 className = "subTitle"> Let's Connect! </h2>

      <div className = "contactContainer">

        <a className = "contactBox" href="mailto: michellew1822@gmail.com"> 
          <img className = "contactImage" src={Email}/>
        </a>

        <a className = "contactBox" href="https://www.linkedin.com/in/michelle-wee123/" target="_blank" rel="noopener noreferrer"> 
          <img className = "contactImage" src={Linkedin}/>
        </a>
        
        <a className = "contactBox" href="https://github.com/MichelleW1234" target="_blank" rel="noopener noreferrer"> 
          <img className = "contactImage" src={GitHub}/>
        </a>

      </div>

    </div>

  )
}

export default Contact
