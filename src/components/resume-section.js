import React from 'react';
import Section from './section';

import '../css/resume-section.css';

const ResumeSection = (props) => {
    return(
        <div className='resume-section__container'>
            <Section 
                sectionName={props.sectionName}
                btnTitle={props.btnTitle}
                arrowSize={props.arrowSize}
                bgcolor={props.bgcolor}
            >
                <div>
                    <h2>My Resume</h2>
                </div>
            </Section>
        </div>
    );
}


export default ResumeSection;