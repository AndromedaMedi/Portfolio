import React from 'react';
// import {GoMarkGithub} from 'react-icons/go'
import {GrLinkedin} from 'react-icons/gr'
import {FaGithubSquare} from 'react-icons/fa'

const Contact = () => {

    return (

        <div className='contact-page'>

            <h3 className='contact-msg'>Please Follow the Below Links to Contact Me or View More of My Work</h3>
            <div className='icons'>
                <span className='icon'><GrLinkedin size={50}/></span>
                <a href='https://github.com/AndromedaMedi?tab=repositories'>
                <span className='icon'><FaGithubSquare size={55}/></span>
                </a>
            </div>

        </div>
    );

};

export default Contact;