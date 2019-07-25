import React, { Component } from 'react';
import Section from './section';

import '../css/about-section.css';

class AboutSection extends Component {
    render() {
        return(
            <div id='about' className='about-section__container'>
                <Section 
                    sectionName={this.props.sectionName}
                    btnTitle={this.props.btnTitle}
                    arrowSize={this.props.arrowSize}
                    bgcolor={this.props.bgcolor}
                />
            </div>
        );
    }
}


export default AboutSection;