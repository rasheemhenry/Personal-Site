import React, { Component } from 'react';
// import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import PromptPreview from './prompt-preview';
import Nav from './nav';
import ProjectSection from './project-section';
// import AboutSection from './about-section';
// import ResumeSection from './resume-section';
// import Section from './section';
import Footer from './footer';

import '../css/main.css';
import vid from '../assets/blickSGap.mp4';
import logo from '../assets/rh-logo-blkwht.svg';
// import logo from '../assets/rh-logo-blk.svg';



class Main extends Component {
    componentDidMount() {
        if(this.refs.theVideo){
            this.refs.theVideo.playbackRate=0.4;
        }
    }

    render() {
        const isFirefox = typeof InstallTrigger !== 'undefined';
        return(
            <div className='main__container'>
                {isFirefox? (
                    <img className='backupimg'/>
                ) : (
                    <div className='video__wrapper'>
                        <video ref='theVideo' autoPlay loop muted controls>
                            <source src={vid} type='video/mp4'/>
                            <source src={vid} type='video/ogg'/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
                <img className='rh-logo' src={logo} alt='logo'/>
                <Nav />
                <PromptPreview />
                <div className='content__container'>
                    <div className='about-text'>
                        <p>
                            I grew up an artist, but gained a deep appreciation
                            for the analytical process of engineering. The draw was problem 
                            solving through expression, all within the strict parameters of code; 
                            a chaotic juxtaposition, neatly guided by patterns, forms into an elegant 
                            solution.<br/>
                            Performance tuning, re-architecting an 
                            inefficient system, and designing a solution to a problem from 
                            scratch is what drives me.
                        </p>
                        {/* <p>
                            I live in New York City, my favorite food is curry, 
                            I ride cyclocross &amp; track bikes, 
                            I speak Japanese,
                            and when I&#39;m excited I quiet down (focus).
                        </p> */}
                    </div>
                    {/* <ResumeSection
                        sectionName='What I can do &amp; what I&#39;ve done'
                        para='Feel free to check out what I&#39;ve accomplised over the years, and my current skill set.'
                        btnTitle='View My Resume'
                        bgcolor={bgcolors.white}
                        link='/resume'
                    /> */}
                </div>
                <ProjectSection 
                        bgcolor={bgcolors.grey}
                        // link='/portfolio'
                        link='/#'
                        idPos='button-right'
                />
                <Footer/>
            </div>
        );
    }
}

const bgcolors = {
    'white': '#fff',
    'grey': '#edeeef',
};

export default Main;