import React, {useState} from 'react';

import '../styles.scss';

const ProjectCards = props => {
    const [showDescription, setShowDescription] = useState(false)
    const displayDesc = e => {
        e.preventDefault()
        setShowDescription(!showDescription)
        console.log(showDescription)
    }

    return(
        <div className='project-card' key={props.name}>
            <h3>{props.name}</h3>
            <p>{props.role}</p>
            {props.githubLink ? 
                <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
                    <button>Github Repo</button>
                </a>
            : null}

            {props.frontend ? 
                <a href={props.frontend} target="_blank" rel="noopener noreferrer">
                    <button>Frontend Repo</button>
                </a> 
            : null } 
            
            {props.backend ?            
                <a href={props.backend} target="_blank" rel="noopener noreferrer">
                    <button>Backend Repo</button>
                </a>  
            : null} 
           
            <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">
                <button>Deployed Web App</button>
            </a>
            <button onClick={displayDesc}>Hello World</button>
            {showDescription ? 
                <div>
                    <h4>description</h4>
                    <p>{props.description}</p>
                </div>
            : null
            }
            
            
        </div>
    )
};

export default ProjectCards;