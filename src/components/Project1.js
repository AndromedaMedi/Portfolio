import React from 'react';
import {FaGithubSquare} from 'react-icons/fa'

const Project1 = () => {


    return (
        <div className='project-page'>

            <h2>Travel Bucket List</h2>
            <hr></hr>

            <h3>Solo Project</h3>
            <h3 className='project-type'>Python  |  Flask  |  PSQL  |  CSS</h3>
            <h5>Completed in 7 days</h5>
        
            <a href="https://github.com/AndromedaMedi/week_5_solo_project.git"><span className='icon'><FaGithubSquare size={50}/></span></a>
        
        </div>
    )
}

export default Project1;