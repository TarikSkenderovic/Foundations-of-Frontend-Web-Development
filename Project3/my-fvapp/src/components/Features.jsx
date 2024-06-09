import React from 'react';
import featuresimage from '../images/Frame 19.gif';



function Features() {
    return (
        <div id='features'>
            <div className='features-model'>
                <img  className='gifImg' src={featuresimage} alt='feature-image'/>
            </div>
            <div className='features-text'>
                <h3>INMOST is an emotional and deeply atmospheric narrative-driven puzzle platformer. Uncover the story of an adventurous young girl, a stoic knight, and a man in search of answers.Explore a crumbling, nightmarish landscape, slice through enemies, and spring deadly traps in order to escape the evil that awaits ...</h3>
                <button>View More</button>
            </div>
        </div>
    )
}


export default Features;

