import "./Introduction.css"

function Introduction() {

  return (
    <div className = "sectionContainer">
      <h2 className = "subTitle"> About Me: </h2>
      <p className = "introText">
        Hi, I'm Michelle, and welcome to my project portfolio! Throughout my time at UCSD working with diverse software and core computer science concepts, I've gained a lot of my skills through projects, 
        from working in academic teams to tinkering for fun on my own time. Each of these projects has challenged me in ways that have been integral to my growth as both a student and a person, whether 
        it was learning a new library, like React, or pushing me to bring an idea, like Arcade, to life. While these projects have had many meaningful takeaways, the most significant one to me is seeing in 
        real time what I can do to create "something"s from "nothing"s, which, in itself, has been incredible to experience firsthand.
      </p>
      <a className = "projectSectionButton" href="https://docs.google.com/document/d/1yxwJvILbZGjwvqFF6PGSkCUXcnz6qH2YGJsIg52HeIo/preview" target="_blank" rel="noopener noreferrer"> View My Resume </a>
    </div>

  )
}

export default Introduction
