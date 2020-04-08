import React from 'react';


const HeaderLayout = props => {
    return(
            <section className='header-info-container'>
                <div className='main-info'>
                    <img className="profile-pic"src={props.imgUrl} alt='Profile'/>
                    <div className="name-links">
                        <h1 className="name">William Berlin</h1>
                        <p className="job-title">Software Developer</p>
                        <p className="email">william.berlin76@gmail.com</p>
                        <a href="https://github.com/WilliamBerlin76" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/william-berlin-75695b193/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"/>
                        </a>
                    </div>
                </div>
                <div className='nav'>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>
            </section>
            
    );
};

export default HeaderLayout;