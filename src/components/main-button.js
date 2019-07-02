import React from 'react';
import { RightArrowAlt } from 'styled-icons/boxicons-regular';

import '../css/main-button.css';


const MainButton = (props) => {
    return(
        <div className='main-button_container'>
            <button className='main-button'>{props.btnTitle} <RightArrowAlt size={props.arrowSize}/></button>
        </div>
    );
}

export default MainButton;