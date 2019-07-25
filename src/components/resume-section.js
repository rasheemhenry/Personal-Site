import React from 'react';
import Section from './section';
import MainButton from './main-button';

import '../css/resume-section.css';

const ResumeSection = (props) => {
    return(
        <div className='resume-section__container'>
            <Section 
                sectionName={props.sectionName}
                para={props.para}
                bgcolor={props.bgcolor}
            >
                <MainButton
                    btnTitle={props.btnTitle}
                    arrowSize={props.arrowSize}
                    link={props.link}
                />
            </Section>
        </div>
    );
}


export default ResumeSection;