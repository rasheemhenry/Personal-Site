import React from 'react';

import '../css/project-card.css';

const ProjectCard = (props) => {
    return(
        <div className='project-card__container' style={props.bgImg}>
            <div className='project-card__text'>
                <h4>{props.pName}</h4>
                <button className='project-card__button'>
                    View Project
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;