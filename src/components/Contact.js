import React from 'react';
import {GoMarkGithub} from 'react-icons/go'
import {GrLinkedin} from 'react-icons/gr'

const Contact = () => {

    return (

        <div className='contact-page'>

            <h3 className='contact-msg'>Please Follow the Below Links to Contact Me or View More of My Work</h3>
            <section className='icons'>
                <span className='icon'><GrLinkedin size={50}/></span>
                <a href='https://github.com/AndromedaMedi?tab=repositories'>
                <span className='icon'><GoMarkGithub size={50}/></span>
                </a>
            </section>

        </div>
    );

};

export default Contact;