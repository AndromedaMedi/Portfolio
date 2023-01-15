import React from 'react';
import {FaGithubSquare} from 'react-icons/fa';
import project1 from '../1_home_page.png';

const Project1 = () => {


    return (
        <div className='project-page'>

            <h2>Travel Bucket List</h2>
            <hr></hr>

            <h3 className='type'>Solo Project</h3>
            <h3 className='project-type'>Python  |  Flask  |  PSQL  |  CSS</h3>
            <h5>Completed in 7 days</h5>
        
            <a href="https://github.com/AndromedaMedi/week_5_solo_project.git">
                <span className='icon2'><FaGithubSquare size={50}/></span>
            </a>
            <paragraph className='paragraph'>
                <section>The app allows the user to track countries and cities they want to visit and those they have visited
                and add them to their bucket list. The user is able to create and edit entried for countries and cities,
                as well as mark destinations as visited or still to see or simply delete.</section>
            </paragraph>
            <img className='project-pic' src={project1} alt='project-pic'/>
        
        </div>
    )
}

export default Project1;