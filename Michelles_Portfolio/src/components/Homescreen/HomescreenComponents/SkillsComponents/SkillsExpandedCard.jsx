import "./SkillsExpandedCard.css";

function SkillsExpandedCard({activeSkill, setActiveSkill}) {

  const skillApplications = [
    ["Used useState, useEffect, and useRef to manage game state and timing to bring animations to life (Arcade)", "Used local and session storage to persist user data and maintain progress between sessions (various)", "Implemented functions and data structures in React to manage user interactions, dynamic state, and responsive UI features (various)"],
    ["Created a retro-style atmosphere with glowing shadows, glitching buttons, and immersive color schemes (Arcade)", "Leveraged Flexbox and CSS Grid to design scenes and coordinate animation effects (Arcade)", "Created hand-drawn pixel art visuals and used Figma to export assets for integration into apps (various)"],
    ["Utilized Agile practices to manage project development in sprints, coordinating tasks and tracking progress via GitHub (TritonTurnUp)", "Developed the front-end of a collaborative scheduler, capturing user input and sending availability data to the backend (TritonTurnUp)", "Conducted user interviews during planning to inform feature design and improve engagement (TritonTurnUp)"],
    ["Handled user interactions to support flexible feature usage (Scripta)", "Gathered user feedback to enhance usability and design (various)", "Integrated keyboard controls and sound effects with UI components to enhance user engagement and immersion (various)"],
    ["Implemented game logic and algorithms to manage scoring, player interactions, and overall game state (Arcade)", "Planned and executed interactive mini-games from concept to fully playable experiences (Arcade)", "Implemented scoring systems and win/loss mechanics to provide feedback and track player progres (Arcade)"]
  ]

  return (

    <div className = "skillExpandedCardFlag">
        <div className="skillExpandedCard">
          <h3>Notable Applications: </h3>

          <div className="skillExpandedCardDescription"> 
            {skillApplications[activeSkill].map((line, index) => ( 
              <p key={index}> &gt; {line} </p>
            ))}
          </div>

          <button className = "skillExpandedCardButton" onClick = {() => setActiveSkill(-1)}>Close</button>
        </div>
    </div>

  )
}

export default SkillsExpandedCard
