import React from 'react';

import '../css/section.css';


const Section = (props) => {
    return(
        <div id={props.idPos} className='section__container' style={{backgroundColor:props.bgcolor}}>
            <h2>{props.sectionName}</h2>
            <p className='section-p'>{props.para}</p>
            {props.children}
        </div>
    );
}

export default Section;