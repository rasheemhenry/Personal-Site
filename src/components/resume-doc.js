import React from 'react';

import '../css/resume-doc.css';

const ResumeDoc = () => {
    return(
        <div className='resume-doc__container'>
            <div id='tech' className='resume-doc__entry'>
                <h2>Technologies</h2>
                <div className='tech-list__container'>
                    <ul className='tech-list'> 
                        <h4>Daily Comfort</h4>
                        <li className='tech-list-li'>JavaScript/Node.js</li>
                        <li className='tech-list-li'>React.js</li>
                        <li className='tech-list-li'>Redux</li>
                        <li className='tech-list-li'>Sass/LESS</li>
                        <li className='tech-list-li'>HTML5/CSS3</li>
                        <li className='tech-list-li'>Version Control (GIT)</li>
                        <li className='tech-list-li'>BEM Methodology</li>
                        <li className='tech-list-li'>Responsive Layout and Design</li>
                        <li className='tech-list-li'>Mocha/Chai</li>
                        <li className='tech-list-li'>Docker</li>
                        <li className='tech-list-li'>MySQL</li>
                    </ul>
                    <ul className='tech-list'> 
                        <h4>Experience With</h4>
                        <li className='tech-list-li'>PHP</li>
                        <li className='tech-list-li'>Python(limited)</li>
                        <li className='tech-list-li'>Sketch</li>
                        <li className='tech-list-li'>Shopify</li>
                        <li className='tech-list-li'>Grunt</li>

                    </ul>
                </div>
            </div>
            <div id='workexp' className='resume-doc__entry'>
                <h2>Work Experience</h2>
                <div className='workexp-list__container'>
                    <ul className='workexp-list'>
                        <h4>Front-End Developer</h4>
                        <h3><a href='http://www.ingest.ai/'className='work-link'>Ingest.ai</a>, New York, NY, Fall 2017 - Present</h3>
                        <li className='workexp-list-li'><p>Build and maintain pure components to create a seemless login process, present sales data, and reflect inventory actionable opportunities, 
                            all within a responsive dashboard. (React.js, Redux, D3)</p></li>
                    </ul>
                    <ul className='workexp-list'>
                        <h4>Full-Stack Developer</h4>
                        <h3><a href='https://www.soul-cycle.com/' className='work-link'>SoulCycle Inc</a>, New York, NY, Fall 2017 - Spring 2019</h3>
                        <li className='workexp-list-li' ><p>Created interactive components to give customers the ability to control their email subscription preferences.
                            Express backend connected to Braze marketing platform API. (React.js, Redux)</p></li>
                        <li className='workexp-list-li'><p>Created reusable landing pages and services for unique pop-up fitness experiences.
                            (React.js, SASS, Express)</p></li>
                        <li className='workexp-list-li'><p>Added timing metrics to Node.js services using statsd implementation to more easily debug and monitor performance of SoulCycle’s 
                            different services. (TypeScript, Datadog)</p></li>
                        <li className='workexp-list-li'><p>Contributed to development of two-click booking and early access reservation features for  
                            soulcycle.com. (Node.js, MySQL)</p></li>
                        <li className='workexp-list-li'><p>Improved API test coverage for a booking service data layer. (Pytest)</p></li>
                        <li className='workexp-list-li'><p>Wrote unit tests and increased reliability of 
                            tests for the user reservation and checkout services. (PHPUnit)</p></li>
                        <li className='workexp-list-li'><p>Set up models and routes for in-house SKU generator. (Node.js)</p></li>
                    </ul>
                    <ul className='workexp-list'>
                        <h4>Bike Operations &amp; Logistics</h4>
                        <h3><a href='https://www.soul-cycle.com/' className='work-link'>SoulCycle Inc</a>, New York, NY, Spring 2015 - Fall 2017</h3>
                        <li className='workexp-list-li'><p>Collaborated to open new fitness studios across the country.</p></li>
                        <li className='workexp-list-li'><p>Devised regional training guidelines to assist with diagnosing bike issues.</p></li>
                    </ul>
                </div>
            </div>
            <div id='edu' className='resume-doc__entry'>
                <h2>Education</h2>
                <div className='edu-list__container'>
                    <h4>B.A. in International Studies, Minor in Computer Science</h4>
                    <p>St. John’s University, Queens, NY, 2014</p>
                </div>
            </div>
        </div>
    );
}

export default ResumeDoc;