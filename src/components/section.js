import React from 'react';
import MainButton from './main-button';

import '../css/section.css';


const Section = (props) => {
    return(
        <div className='section__container' style={{backgroundColor:props.bgcolor}}>
            <h2>{props.sectionName}</h2>
            <p className='section-p'>{props.para}</p>
            {props.children}
        </div>
    );
}

export default Section;