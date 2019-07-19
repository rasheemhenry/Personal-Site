import React from 'react';
import Header from './header';
import Nav from './nav';
import Section from './section';
import Footer from './footer';

import '../css/about-page.css';

const AboutPage = (props) => {
    return (
        <div className='about-page__container'>
           <Header
                des='A deeper look into who I am'
                title='My passions and personality'
            />
            <Nav
                fontColor='dark'
            />
           <Section
                bgcolor={bgcolors.grey}
            />
           <Section />
           <Section 
                bgcolor={bgcolors.grey}
            />
            <Footer/>
        </div>
    );
}

const bgcolors = {
    'white': '#fff',
    'grey': '#edeeef',
};

export default AboutPage;