import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo_no_background.png'

const NavBar = () => {

    return (
        <>
        <ul className='nav-bar'>

            <Link className="nav-link" to="/"><img className='logo' src={logo} alt='logo'/></Link>

            <div className='nav-links'>
            <li>
                <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li>
                <Link className="nav-link" to="/projects">PROJECTS</Link>
            </li>            
            <li>
                <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            </div>
        </ul>
        </>
    );
};

export default NavBar;