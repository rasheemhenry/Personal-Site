import React from 'react';
import MainButton from './main-button';

import '../css/section.css';


const Section = (props) => {
    return(
        <div className='section__container' style={{backgroundColor:props.bgcolor}}>
            <h2>{props.sectionName}</h2>
            {props.children}
            <MainButton
                btnTitle={props.btnTitle}
                arrowSize={props.arrowSize}
            />
        </div>
    );
}

export default Section;