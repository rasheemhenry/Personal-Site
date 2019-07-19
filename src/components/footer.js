import React from 'react';

import '../css/footer.css';

const Footer = (props) => {
    return (
        <div className='footer__container'>
            {props.children}
            <p>&copy; 2019 Rasheem Henry. All rights reserved.</p>
        </div>
    );
}

export default Footer;