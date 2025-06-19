import "./Skills.css"

function Skills() {

  return (
    <div className = "skillsScreen">
        <h1 className = "subTitle">
            My Skills
        </h1>

        <div className = "skillsContainer">
          <ul>
            <li> Programming Languages: Java, Python, C++, C </li>
            <li> UI/UX: React (JavaScript), CSS, Figma </li>
            <li> Web Application Development </li>
            <li> Agile & Software Development</li>
          </ul>

          <ul>
            <li> Problem-solving: Data Structures, Algorithms, Dynamic Programming</li>
            <li> Machine Learning Algorithms </li>
            <li> Discrete Mathematics, Linear Algebra, Calculus </li>
            <li> Critical Thinking & Creativity </li>
          </ul>
        </div>
    </div>

  )
}

export default Skills
