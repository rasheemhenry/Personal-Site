import React from 'react';
import '../css/nav.css';

const Nav = () => {
    return(
        <div className='nav__container'>
            <a href='#' className='nav__link'>HOME</a>
            <a href='#' className='nav__link'>PORTFOLIO</a>
            <a href='#' className='nav__link'>ABOUT</a>
            <a href='#' className='nav__link'>RESUME</a>
            <a href='#' className='nav__link'>CONTACT</a>
        </div>
    );
}

export default Nav;
