import React from 'react';


const Skills = () => {

    return(
        <section className='skills-container'>
            <h2>Skills</h2>
            <div className='skills-list'>
                <h3 className='skill-card-title'> HTML5 
                    <p>
                        <i className="fab fa-html5"></i>
                    </p>
                </h3>
                <h3 className='skill-card-title'> CSS/LESS/SASS
                    <p>
                        <i className="fab fa-css3-alt"></i>
                    </p>
                </h3>
                <h3 className='skill-card-title'> JavaScript
                    <p>
                        <i className="fab fa-js-square"></i>
                    </p>
                </h3>
                <h3 className='skill-card-title'> React.js/Redux
                    <p>
                        <i className="fab fa-react"></i>
                    </p>    
                </h3>
            </div>
        </section>
    )
}

export default Skills