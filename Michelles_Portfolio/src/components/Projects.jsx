import { useState } from 'react';
import "./Projects.css"

import CardOne from "./ProjectComponents/cardOne.jsx";
import CardTwo from "./ProjectComponents/cardTwo.jsx";

function Projects() {

    const numProjects = 2;

    const [ProjectNumber, setProjectNumber] = useState(1);

    const nextClicked = () => {

        if (ProjectNumber == numProjects){

            setProjectNumber(1);

        } else {

            setProjectNumber(prev => prev + 1);

        }

    }


    const backClicked = () => {

        if (ProjectNumber == 1){

            setProjectNumber(numProjects);

        } else {

            setProjectNumber(prev => prev - 1);

        }

    }
    
    

  return (
    <div className = "projectOuterContainer">
        
        <h1 className = "subTitle">
            My Projects:
        </h1>
        <div className = "projectsInnerContainer">

            {ProjectNumber == 1 ? (

                <CardOne/>

            ) : (

                <CardTwo/>


            )}

            <div className = "cardCarouselButtonContainer">
                <button className = "cardCarouselButton" onClick={backClicked}>
                    Back
                </button>

                <button className = "cardCarouselButton" onClick={nextClicked}>
                    Next
                </button>

            </div>

        </div>

    </div>

  )
}

export default Projects
