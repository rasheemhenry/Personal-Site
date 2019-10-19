import React, { Component } from 'react';
import Section from './section';
import bluePic from '../assets/bluebuildu.jpg';

import '../css/about-section.css';

class AboutSection extends Component {
    render() {
        return(
            <div id='about' className='about-section__container'>
                <Section 
                    sectionName={this.props.sectionName}
                    para={this.props.para}
                    bgcolor={this.props.bgcolor}
                    idPos={this.props.idPos}
                />
                {this.props.children}
            </div>
        );
    }
}

// const blueBuilding ={
//     backgroundImage: `url(${bluePic})`
// };

// const dplant ={
//     backgroundImage: `url(${plant})`
// };

export default AboutSection;