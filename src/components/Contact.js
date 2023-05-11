import React from 'react';
import { Link } from 'react-router-dom';
// import {GoMarkGithub} from 'react-icons/go'
// import {BsLinkedin} from 'react-icons/bs';
// import {FaGithubSquare} from 'react-icons/fa';
// import {BsDownload} from 'react-icons/bs';
// import {ImMail} from 'react-icons/im';
import {FiMail, FiLinkedin, FiGithub, FiDownload} from 'react-icons/fi';


const Contact = () => {

    return (

        <div className='contact-page'>

            <h3 className='contact-msg'>Please Follow the Links Below to Contact Me or View More of My Work</h3>
            <div className='icons'>
                <span className='icon2' onClick={() => window.location = 'mailto:andromeda.akoulli@gmail.com'}><FiMail size={55}/></span>
                <a href='https://www.linkedin.com/in/andromeda-akoulli'>
                <span className='icon2'><FiLinkedin size={55}/></span>
                </a>
                <a href='https://github.com/AndromedaMedi?tab=repositories'>
                <span className='icon2'><FiGithub size={55}/></span>
                </a>
            </div>
            <div className='cv'>
                <p>You can dowload my CV below.</p>
                <p>
                <Link to="/Andromeda-Akoulli-CV.pdf" target="_blank" download><span className='icon2'><FiDownload size={55}/></span></Link>
                </p>
            </div>
            
        </div>
    );

};

export default Contact;