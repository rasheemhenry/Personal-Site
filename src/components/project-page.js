import React, { Component } from 'react';
import Header from './header';
import Nav from './nav';
import Section from './section';
import ProjectCard from './project-card';
import Footer from './footer';

import '../css/project-page.css';
import tokyoHotel from '../assets/tokyoHotel.jpg';

class ProjectPage extends Component{
    render(){
        return(
            <div className='project-page__container'>
                <Header 
                    des='My work as a Software Engineer'
                    title='My Web App Portfolio'  
                    bgImg={bgStyle}
                />
                <Nav 
                    fontColor='dark'
                />
                <Section
                    sectionName='Im a dedicated Web developer'
                    para='What drives me complete control to curate and refine services around me to better suit my needs'
                    bgcolor={bgcolors.grey}
                />
                <Section 
                    sectionName='Web Projects'
                    bgcolor={bgcolors.white}
                >
                    <div className='card__wrapper'>
                        <ProjectCard
                            pName='Healthy Distraction'
                        />
                        <ProjectCard
                            pName='Project Name'
                        />
                    </div>  
                </Section>
                <Footer/>
            </div>
        );
    }
}

const bgcolors = {
    'white': '#fff',
    'grey': '#edeeef',
};

const bgStyle =  {
    backgroundImage: `url(${tokyoHotel})`
};

export default ProjectPage;