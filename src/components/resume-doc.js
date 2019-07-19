import React from 'react';

import '../css/resume-doc.css';

const ResumeDoc = () => {
    return(
        <div className='resume-doc__container'>
            <div id='tech' className='resume-doc__entry'>
                <h2>Technologies</h2>
                <ul className='tech-list'> 
                    <h4>Daily Comfort</h4>
                    <li>JavaScript/Node.js</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>Sass/LESS</li>
                    <li>HTML5/CSS3</li>
                    <li>Version Control (GIT)</li>
                    <li>BEM Methodology</li>
                    <li>Responsive Layout and Design</li>
                    <li>Mocha/Chai</li>
                    <li>Docker</li>
                    <li>MySQL</li>
                </ul>
                <ul className='tech-list'> 
                    <h4>Experience With</h4>
                    <li>PHP</li>
                    <li>Python(limited)</li>
                    <li>Sketch</li>
                    <li>Shopify</li>
                    <li>Grunt</li>

                </ul>
            </div>
            <div id='workexp' className='resume-doc__entry'></div>
            <div id='edu' className='resume-doc__entry'></div>
        </div>
    );
}

export default ResumeDoc;