import React from 'react';
import {Link} from 'react-router-dom';


const Projects = () => {


    return (
        <div className='projects-page'>
            <h2 className='page-title'>My Projects</h2>
            <hr></hr>
            <div className='projects-list'>
                <ul>
                    <li className='projects-list-item'>
                        <h2><Link className='title' to="/project1">Travel Bucket List</Link></h2>
                        <p className='project-type'>Solo Project</p>
                    </li>
                    <li className='projects-list-item'>
                        <h2><Link className='title' to="/project2">Unknown</Link></h2>
                        <p className='project-type'>Group Project</p>
                    </li>
                    <li className='projects-list-item'>
                        <h2><Link className='title' to="/project3">Unknown</Link></h2>
                        <p className='project-type'>Unknown</p>
                    </li>
                </ul>
            </div>
        </div>
    );

};

export default Projects;