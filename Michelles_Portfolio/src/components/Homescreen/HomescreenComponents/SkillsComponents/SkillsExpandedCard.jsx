import "./SkillsExpandedCard.css";

function SkillsExpandedCard({activeSkill, setActiveSkill}) {

  const skillDescriptions = [" This is for React", 
    " This is for CSS This is for CSSThis is for CSSThis is for CSSThis is for CSSThis is for CSSThis is for CSSThis is for CSSThis is for CSS",
    " This is for Figma",
    " This is for Web application devlopment",
    " This is for Agile & Software Development",
    " This is for Game development"
  ]

  return (

    <div className = "skillExpandedCardFlag">
        <div className="skillExpandedCard">
          <p className="skillExpandedCardDescription"> {skillDescriptions[activeSkill]} </p>
          <button className = "skillExpandedCardButton" onClick = {() => setActiveSkill(-1)}>Close</button>
        </div>
    </div>

  )
}

export default SkillsExpandedCard
