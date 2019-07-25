import React from 'react';
import {Link} from 'react-router-dom';

import '../css/nav.css';

const Nav = (props) => {
    let nFont = props.fontColor == 'dark' ? dFontStyle : lFontStyle;
    return(
        <div className='nav__container'>
                <ul>
                    <li>
                        <Link className='nav__link' to="/" style={nFont}>Home</Link>
                    </li>
                    <li>
                        <Link className='nav__link' to="/portfolio" style={nFont}>Portfolio</Link>
                    </li>
                    <li>
                        <a className='nav__link' href='#about' style={nFont}>About</a>
                        {/* <Link className='nav__link' to="/about" style={nFont}>About</Link> */}
                    </li>
                    <li>
                        <Link className='nav__link' to="/resume/" style={nFont}>Resume</Link>
                    </li>
                    <li>
                        <a className='nav__link' href='#footer' style={nFont}>Contact</a>
                        {/* <Link className='nav__link' to="/contact/" style={nFont}>Contact</Link> */}
                    </li>
                </ul>
        </div>
    );
}

const dFontStyle = {
    color: '#696969'
};

const lFontStyle = {
    color: ''
};


export default Nav;
