import React from 'react';
import HeaderDes from './header-des';

import '../css/header.css';

const Header = (props) => {
    return(
        <div className='header__container' style={props.bgImg}>
            <HeaderDes
                des={props.des}
                title={props.title}
            />
        </div>
    );
}

export default Header;