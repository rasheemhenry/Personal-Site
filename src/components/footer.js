import React from 'react';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';

import '../css/footer.css';

const Footer = (props) => {
    return (
        <div id='footer' className='footer__container'>
            {props.children}
            <p>&copy; 2019 Rasheem Henry. All rights reserved.</p>
            <div className='social__container'>
                <a href='https://github.com/rasheemhenry'>
                    <Github
                        size='30'
                        color='white'
                    />
                </a>
                <a href='https://www.linkedin.com/in/rasheem-henry-258a4147/'>
                    <Linkedin
                        size='30'
                        color='white'
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;