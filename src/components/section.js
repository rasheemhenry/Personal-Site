import React from 'react';
import MainButton from './main-button';

import '../css/section.css';


const Section = (props) => {
    return(
        <div className='section__container' style={{backgroundColor:props.bgcolor}}>
            <h2>{props.sectionName}</h2>
            <p>{props.para}</p>
            {props.children}
            {props.btnTitle &&
                <MainButton
                    btnTitle={props.btnTitle}
                    arrowSize={props.arrowSize}
                />
            }
        </div>
    );
}

export default Section;