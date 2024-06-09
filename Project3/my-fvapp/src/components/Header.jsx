import React from 'react';
import Navbar from './Navbar';
import videoBg from '../assets/videoBg.mp4'


function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div>
                <video className='video' src={videoBg} autoPlay loop muted />
                <div className='overlay'></div>
            </div>
        </div>
    )
}


export default Header;

