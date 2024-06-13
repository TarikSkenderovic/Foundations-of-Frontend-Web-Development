import React from 'react';

function Box(props) {
    return (
        <div className='s-box'>
            <div className='s-b-img'>
                <div className='s-b-img'>
                    <img src={props.image} alt={props.alte}/>
                </div>
            </div>
            <div className='s-b-box'>
                <p>INMOST is an emotional and deeply atmospheric narrative-driven puzzle platformer.</p>
                <a href='#' className='cv-btn'>{props.button}</a>
            </div>
        </div>
    )
}


export default Box;
