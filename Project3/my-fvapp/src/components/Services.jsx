import React from 'react';
import img01 from '../images/img01.jpg';
import img02 from '../images/s1.png';
import img03 from '../images/img03.jpg'; 
import img04 from '../images/img04.jpg'; 
import img05 from '../images/img05.jpg'; 
import img06 from '../images/img06.jpg'; 
import img07 from '../images/img07.png'; 
import img08 from '../images/img08.png'; 

function Services() {
    return (
        <div id='services'>
            <div className='s-heading'>
                <h1>Gallery</h1>
                <p>A Knight sworn to the forces of darkness.</p>
            </div>
            <div className='b-container'>
                <div className="box">
                    <img src={img01} alt="" />
                </div>
                <div className="box">
                    <img src={img02} alt="" />
                </div>
                <div className="box">
                    <img src={img03} alt="" />
                </div>
                <div className="box">
                    <img src={img05} alt="" />
                </div>
                <div className="box">
                    <img src={img04} alt="" />
                </div>
                <div className="box">
                    <img src={img06} alt="" />
                </div>
                <div className="box">
                    <img src={img07} alt="" />
                </div>
                <div className="box">
                    <img src={img08} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Services;
