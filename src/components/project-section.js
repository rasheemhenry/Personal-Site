import React, { Component } from 'react';
import ProjectCard from './project-card';
import Section from './section';
import MainButton from './main-button';

import '../css/project-section.css';

class ProjectSection extends Component {
    render(){
        return(
            <div className='project-section__container'>
                <Section
                    sectionName={this.props.sectionName}
                    btnTitle={this.props.btnTitle}
                    arrowSize={this.props.arrowSize}
                    bgcolor={this.props.bgcolor}
                >
                    <div className='card__wrapper'>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>  
                </Section>
            </div>
        );
    }
}

export default ProjectSection;