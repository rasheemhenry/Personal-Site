import React from 'react';

import '../css/project-card.css';

const ProjectCard = (props) => {
    return(
        <div className='project-card__container'>
            <div className='project-card__text'>
                <p>website</p>
                <h4>Project Name</h4>
                <button className='project-card__button'>
                    View Project
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;