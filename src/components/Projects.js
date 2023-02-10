import React from 'react';
import {FaGithubSquare} from 'react-icons/fa';
import project1 from '../project_images/project_1/1_home_page.png';
import project2 from '../project_images/project_2/discover_page.png';


const Projects = () => {


    return (
        <div className='projects-page'>
            <h2 className='page-title'>My Projects</h2>
            <hr className='line'></hr>
            <div className='projects-list'>
                <ul>
                    <li className='projects-list-item'>
                        <div className='project'>
                            <div className='project-details'>
                                <h2>Travel Bucket List</h2>
                                <hr></hr>
                                <h3 className='type'>Solo Project</h3>
                                <h3 className='project-type'>Python  |  Flask  |  PSQL  |  CSS</h3>
                                <h5>Completed in 7 days</h5>

                                <a href="https://github.com/AndromedaMedi/week_5_solo_project.git">
                                    <span className='icon'><FaGithubSquare size={50}/></span>
                                </a>
                                <paragraph className='paragraph'>
                                    <section>
                                        The app allows the user to track countries and cities they want to visit and those they have visited
                                        and add them to their bucket list. The user is able to create and edit entried for countries and cities,
                                        as well as mark destinations as visited or still to see or simply delete.
                                    </section>
                                </paragraph>
                            </div>
                            <div className='project-video'>
                                <img className='project-pic' src={project1} alt='project-pic'/>
                            </div>
                        </div>
                    </li>

                    <li className='projects-list-item'>
                        <div className='project'>
                            <div className='project-details'>
                                <h2>Unread - Book Tracking App</h2>
                                <hr></hr>
                                <h3 className='type'>Group Project</h3>
                                <h3 className='project-type'>React  |  JavaScript  |  MongoDB | API | CSS</h3>
                                <h5>Completed in 7 days</h5>

                                <a className='link' href="https://github.com/AndromedaMedi/Unread.git">
                                    <span className='icon'><FaGithubSquare size={50}/></span>
                                </a>
                                <paragraph className='paragraph'>
                                    <section>
                                        Unread is a book tracking app created for the CodeClan Javascript group project 
                                        in week 9 of the Professional Software Development course. It allows multiple users 
                                        to track the books they read or wish to read, using the OpenLibrary API.
                                    </section>
                                </paragraph>
                            </div>
                            <div className='project-video'>
                                <img className='project-pic' src={project2} alt='project-pic'/>
                            </div>
                        </div>
                    </li>
                    <li className='projects-list-item'>
                        <div className='project'>
                            <h2>Unknown</h2>
                            <hr></hr>
                            <h3 className='type'>Unknown Project</h3>
                            <h3 className='project-type'>React  |  JavaScript  |  MongoDB | API | CSS</h3>
                            <h5>Completed in 14 days</h5>

                            <a className='link' href="https://github.com/AndromedaMedi/Unread.git">
                                <span className='icon'><FaGithubSquare size={50}/></span>
                            </a>
                            <paragraph className='paragraph'>
                                <section>
                                </section>
                            </paragraph>
                        </div>
                        <div className='project-video'>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

};

export default Projects;