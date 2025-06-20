import "./Introduction.css"

function Introduction() {

  return (
    <div className = "introContainer">
        <h1 className = "title">
          Michelle Wee
        </h1>
        <h1 className = "subTitle">
            About Me:
        </h1>
        <p className = "introText">
            Hi, I'm Michelle, an incoming fourth-year attending the University of California San Diego, majoring in Computer Science with a 
            minor in Cognitive Science.I am passionate about building intelligent software solutions and have gained hands-on experience in 
            software development and machine learning throughout my time in college. In the future, I hope to contribute to innovative software 
            solutions that harness the power of AI and machine learning to improve people’s lives and to impact the world.
        </p>
        <a className = "resumeButton" href="/resume.pdf" download>Download My Resume</a>
    </div>

  )
}

export default Introduction
