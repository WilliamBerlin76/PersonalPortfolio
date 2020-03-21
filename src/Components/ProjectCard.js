import React, {useState} from 'react';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


import '../styles.scss';

const ProjectCards = props => {
    const [showDescription, setShowDescription] = useState(false)
    const displayDesc = e => {
        e.preventDefault()
        setShowDescription(!showDescription)
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
            {!showDescription ? 
                <div className='toggle-description' onClick={displayDesc}>
                    <span className='drop-text'>show more</span>
                    <KeyboardArrowDownIcon /> 
                </div>
                : 
                <div className='toggle-description' onClick={displayDesc}>
                    <span className='drop-text'>show less</span>
                    <ExpandLessIcon />
                </div>
            }
                
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