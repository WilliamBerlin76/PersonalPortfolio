import React from 'react';


const Skills = () => {

    return(
        <section className='skills-container' id='skills'>
            <h2>Skills/Technologies</h2>
            <div className='skills-list'>
                <h3 className='skill-card-title'> HTML5 
                    <p>
                        {/* <i className="fab fa-html5" /> */}
                        <img alt='skill-logo' className='skill-logo' src="https://img.icons8.com/color/240/000000/html-5.png"/>
                        {/* <a href="https://icons8.com/icon/20909/html-5">Html 5 icon by Icons8</a> */}
                    </p>
                </h3>
                <h3 className='skill-card-title'> CSS/LESS/SASS
                    <p>
                        {/* <i className="fab fa-css3-alt" /> */}
                        <img alt='skill-logo' className='skill-logo' src="https://img.icons8.com/color/240/000000/css3.png"/>
                        {/* <a href="https://icons8.com/icon/21278/css3">CSS3 icon by Icons8</a> */}
                    </p>
                </h3>
                <h3 className='skill-card-title'> JavaScript
                    <p>
                        {/* <i className="fab fa-js-square" /> */}
                        <img alt='skill-logo' className='skill-logo' src="https://img.icons8.com/color/240/000000/javascript.png"/>
                        {/* <a href="https://icons8.com/icon/108784/javascript">JavaScript icon by Icons8</a> */}
                    </p>
                </h3>
                <h3 className='skill-card-title'> React.js/Redux
                    <p>
                        {/* <i className="fab fa-react" /> */}
                        <img alt='skill-logo' className='skill-logo' src="https://img.icons8.com/officel/160/000000/react.png"/>
                        {/* <a href="https://icons8.com/icon/wPohyHO_qO1a/react">React icon by Icons8</a> */}
                    </p>    
                </h3>
                <h3 className='skill-card-title'> Node.js/Express
                    <p>
                        {/* <i className="fab fa-react" /> */}
                        <img style={ {background: '#cccccc', 
                                    borderRadius: '5px', 
                                    paddingLeft: '5px', 
                                    // height: '125px', 
                                    // marginTop:'12px'
                                } } 
                            alt='skill-logo'
                            className='skill-logo' 
                            src="https://img.icons8.com/windows/256/000000/nodejs.png"/>
                        {/*<a href="https://icons8.com/icon/54087/nodejs">Nodejs icon by Icons8</a>*/}
                    </p>    
                </h3>
                <h3 className='skill-card-title'> Python
                    <p>
                        {/* <i className="fab fa-react" /> */}
                        <img alt='skill-logo' className='skill-logo' src="https://img.icons8.com/color/144/000000/python.png"/>
                        {/*<a href="https://icons8.com/icon/13441/python">Python icon by Icons8</a>*/}
                    </p>    
                </h3>
                <h3 className='skill-card-title'> SQL/PostgreSQL
                    <p>
                        {/* <i className="fab fa-react" /> */}
                        <img alt='skill-logo' className='skill-logo' src="https://img.icons8.com/color/240/000000/sql.png"/>
                        {/*<a href="https://icons8.com/icon/13406/sql">SQL icon by Icons8</a>*/}
                    </p>    
                </h3>
                <h3 className='skill-card-title'> Firebase/Firestore
                    <p>
                        {/* <i className="fab fa-react" /> */}
                        <img alt='skill-logo' className='skill-logo' src="https://img.icons8.com/color/240/000000/firebase.png"/>
                        {/*<a href="https://icons8.com/icon/13406/sql">SQL icon by Icons8</a>*/}
                    </p>    
                </h3>
                <h3 className='skill-card-title'> AWS
                    <p>
                        {/* <i className="fab fa-react" /> */}
                        <img 
                            style={ {background: '#ffffff', 
                                    borderRadius: '5px', 
                                    paddingRight: '5px', 
                                    paddingLeft: '5px', 
                                    // height: '125px', 
                                    // marginTop:'12px'
                                } } 
                            alt='skill-logo' 
                            className='skill-logo' 
                            src="https://img.icons8.com/color/240/000000/amazon-web-services.png"/>
                        {/*<a href="https://icons8.com/icon/13406/sql">SQL icon by Icons8</a>*/}
                    </p>    
                </h3>
                
            </div>
        </section>
    )
}

export default Skills