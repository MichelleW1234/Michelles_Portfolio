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
    <div>
        <h1 className = "subTitle">
            My Projects:
        </h1>
        <div className = "projectOuterContainer">

            {ProjectNumber == 1 ? (

                <CardOne/>

            ) : (

                <CardTwo/>


            )}

            <div className = "cardCarouselButtonContainer">
                <div className = "cardCarouselButton" onClick={backClicked}>
                    Back
                </div>

                <div className = "cardCarouselButton" onClick={nextClicked}>
                    Next
                </div>

            </div>

        </div>

    </div>

  )
}

export default Projects
