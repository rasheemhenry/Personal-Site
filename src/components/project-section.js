import React, { Component } from 'react';
import ProjectCard from './project-card';
import Section from './section';
import MainButton from './main-button';

import '../css/project-section.css';
import yoyo from '../assets/yoyo.jpg';
import plant from '../assets/plant.jpg';

class ProjectSection extends Component {
    render(){
        return(
            <div className='project-section__container'>
                <Section
                    sectionName={this.props.sectionName}
                    bgcolor={this.props.bgcolor}
                    idPos={this.props.idPos}
                >
                    <div className='card__wrapper'>
                        <ProjectCard
                            pName='Healthy Distraction'
                            bgImg={yo_yo}
                        />
                        <ProjectCard
                            pName='Mokai'
                            bgImg={dplant}
                        />
                    </div>  
                    {/* <MainButton
                        link={this.props.link}
                    /> */}
                </Section>
            </div>
        );
    }
}

const yo_yo ={
    backgroundImage: `url(${yoyo})`
};

const dplant ={
    backgroundImage: `url(${plant})`
};

export default ProjectSection;