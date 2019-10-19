import React from 'react';
import {Link} from 'react-router-dom';
// import { RightArrowAlt } from 'styled-icons/boxicons-regular';

import { ChevronRight } from 'styled-icons/feather/ChevronRight';
import '../css/main-button.css';


const MainButton = (props) => {
    return(
        <div className='main-button__container'>
            <Link to={props.link}>
                <button className='main-button'>
                    {/* {props.btnTitle} */}
                    <ChevronRight/>
                </button>
            </Link>
        </div>
    );
}

export default MainButton;