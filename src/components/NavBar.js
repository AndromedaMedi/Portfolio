import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <ul className='nav-bar'>
            <li>
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
                <Link className="nav-link" to="/projects">Projects</Link>
            </li>            
            <li>
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default NavBar;