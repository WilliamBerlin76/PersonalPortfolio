import React from 'react';

import { projectData } from '../dataArrays';

const Projects = () => {

    return(
        <section className="projects-section-container">
            <h2>Projects</h2>
            <div className='project-cards-container'>
                {projectData.map(item => {
                    return(
                        <div className='project-card' key={item.name}>
                            <h3>{item.name}</h3>
                            <p>{item.role}</p>
                            <a href={item.githubLink} target="_blank">
                                <button>Github Repo</button>
                            </a>
                            <a href={item.deployedLink} target="_blank">
                                <button>Deployed Web App</button>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;