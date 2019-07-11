import React from 'react';

import '../css/header-des.css';

const HeaderDes = (props) => {
    return(
        <div className='header-des__container'>
            <p>{props.des}</p>
            <h1>{props.title}</h1>
        </div>
    );
}

export default HeaderDes;