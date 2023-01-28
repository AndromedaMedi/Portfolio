import React from 'react';
import {FaGithubSquare} from 'react-icons/fa';
import project2 from '../project_images/project_2/discover_page.png';

const Project2 = () => {


    return (
        <div className='project-page'>
            <h2>Unread - Book Tracking App</h2>
            <hr></hr>

            <h3 className='type'>Group Project</h3>
            <h3 className='project-type'>React  |  JavaScript  |  MongoDB | API | CSS</h3>
            <h5>Completed in 7 days</h5>

            <a className='link' href="https://github.com/AndromedaMedi/Unread.git">
                <span className='icon2'><FaGithubSquare size={50}/></span>
            </a>
            <paragraph className='paragraph'>
                <section>
                    Unread is a book tracking app created for the CodeClan Javascript group project 
                    in week 9 of the Professional Software Development course. It allows multiple users 
                    to track the books they read or wish to read, using the OpenLibrary API.
                </section>
            </paragraph>
            <img className='project-pic' src={project2} alt='project-pic'/>
        

            
        </div>
    )
}

export default Project2;