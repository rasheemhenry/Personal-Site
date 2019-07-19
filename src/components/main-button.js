import React from 'react';
import {Link} from 'react-router-dom';
import { RightArrowAlt } from 'styled-icons/boxicons-regular';

import '../css/main-button.css';


const MainButton = (props) => {
    return(
        <div className='main-button_container'>
            <Link to={props.link}>
                <button className='main-button'>
                    {props.btnTitle} <RightArrowAlt size={props.arrowSize}/>
                </button>
            </Link>
        </div>
    );
}

export default MainButton;