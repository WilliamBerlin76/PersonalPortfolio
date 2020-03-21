import React from 'react';

import { projectData } from '../dataArrays';
import ProjectCards from './ProjectCard';

const Projects = () => {

    return(
        <section className="projects-section-container">
            <h2>Projects</h2>
            <div className='project-cards-container'>
                {projectData.map(item => {
                    return(
                        <ProjectCards
                           key={item.name}  
                           name={item.name}
                           role={item.role}
                           githubLink={item.githubLink} 
                           frontend={item.frontend}
                           backend={item.backend}
                           deployedLink={item.deployedLink}
                           description={item.description}
                           showDesc={false}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;