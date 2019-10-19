import React from 'react';
import Header from './header';
import Nav from './nav';
import Section from './section';
import Footer from './footer';
import ResumeDoc from './resume-doc';

import '../css/resume-page.css';
import dam from '../assets/dam.jpg';

const ResumePage = (props) => {
    return (
        <div className='resume-page__container'>
           <Header
                title='My Experience'
                bgImg={bgStyle}
            />
            <Nav />
           <Section>
            <ResumeDoc/>
           </Section>
           <Footer/>
        </div>
    );
}

const bgStyle =  {
    backgroundImage: `url(${dam})`
};

export default ResumePage;