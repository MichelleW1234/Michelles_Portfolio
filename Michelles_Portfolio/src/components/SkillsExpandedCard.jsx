import "./SkillsExpandedCard.css";

function SkillsExpandedCard({activeSkill, setActiveSkill}) {

  return (

    <div className = "skillExpandedCardFlag">
        <div className="skillExpandedCard">
            Testing
            <button onClick = {() => setActiveSkill(-1)}>Close</button>
        </div>
    </div>

  )
}

export default SkillsExpandedCard
