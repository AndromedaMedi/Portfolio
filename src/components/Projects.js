import React from 'react';
import {FaGithubSquare} from 'react-icons/fa';
import project1 from '../project_images/project_1/1_home_page.png';
import video2 from '../unread-recording.mp4';


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
                                <h4 className='project-type'>Python  |  Flask  |  PSQL  |  CSS</h4>
                                <h5 className='type'>Solo Project</h5>
                                <h5>Completed in 7 days</h5>

                                <a href="https://github.com/AndromedaMedi/Travel-Bucket-List">
                                    <span className='icon'><FaGithubSquare size={50}/></span>
                                </a>
                                <paragraph className='paragraph'>
                                    <section>
                                    Travel Bucket List is a travel tracking CRUD app that allows the user 
                                    to manage the countries and cities they have visited and wish to visit, 
                                    using RESTful routes, a PostgreSQL database and Python(Flask). This was 
                                    my first solo project, created on week 5 of the Software development 
                                    course at CodeClan. 
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
                            <div className='project-video'>
                                <video className='project-pic' src={video2} controls="controls" autoplay="true" alt='video-demo'/>
                            </div>
                            <div className='project-details'>
                                <h2>Unread - Book Tracking App</h2>
                                <h4 className='project-type'>React  |  JavaScript  |  MongoDB | API | CSS</h4>
                                <h5 className='type'>Group Project</h5>
                                <h5>Completed in 7 days</h5>

                                <a className='link' href="https://github.com/AndromedaMedi/Unread">
                                    <span className='icon'><FaGithubSquare size={50}/></span>
                                </a>
                                <paragraph className='paragraph'>
                                    <section>
                                    Unread is a book tracking app that allows multiple users to track the books 
                                    they read or wish to read, using the OpenLibrary API. The web app was built 
                                    utilizing React on the front end which connects to the API that communicates 
                                    with NoSQL database MongoDB at the backend. As a group-project, Unread was a 
                                    great opportunity to collaborate and practice Scrum methodologies.
                                    </section>
                                </paragraph>
                            </div>
                        </div>
                    </li>

                    <li className='projects-list-item'>
                        <div className='project'>
                            <div className='project-details'>
                                <h2>RISE - Budget App</h2>
                                <h3 className='project-type'>Java  |  Spring  |  React | JS | TS | SQL | RestAPI | CSS</h3>
                                <h5 className='type'>Group Project</h5>
                                <h5>Completed in 14 days</h5>

                                <a className='link' href="https://github.com/AndromedaMedi/Rise">
                                    <span className='icon'><FaGithubSquare size={50}/></span>
                                </a>
                                <paragraph className='paragraph'>
                                    <section>
                                    RISE is a personal budgeting app that allows the user to track their expenses, 
                                    create savings pots and get advice on some financial aspects. The web app was 
                                    built utilizing React Express on the front end written in JS and TS, connecting 
                                    to the back end written in Java, employing a Spring Boot framework, communicating 
                                    with SQL database.
                                    </section>
                                </paragraph>
                            </div>
                            <div className='project-video'>
                                <p>video</p>
                            </div>
                        </div>    
                    </li>
                </ul>
            </div>
        </div>
    );

};

export default Projects;