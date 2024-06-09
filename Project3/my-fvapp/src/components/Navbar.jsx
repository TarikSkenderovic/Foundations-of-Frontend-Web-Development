import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';

function Navbar() {
    return (
        <div>
            <nav>
                <Link to='main' className='logo'>
                    <img src={logo} alt='logo'/>
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'/>
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><Link to='main'className='active' smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to='features' smooth={true} duration={1000}>About</Link></li>
                    <li><Link to='services' smooth={true} duration={1000}>Gallery</Link></li>
                    <li><Link to='subscribe' smooth={true} duration={1000}>Contact</Link></li>

                </ul>
                <a 
                href='https://store.steampowered.com/app/938560/INMOST/?l=english&curator_clanid=36850605' 
                className='hey'
                target="_blank" 
                rel="noopener noreferrer"
                >Buy Now</a>
            </nav>

        </div>
    )
}

export default Navbar;
