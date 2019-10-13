import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    margin: 0 auto;
    color: rgb(199, 199, 199);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    height: 65vh;
`;
const HeaderLayout = props => {
    return(
        <HeaderWrapper key = {props.id}>
            <div className='header-info-container'>
                <img className="profile-pic"src={props.imgUrl}/>
                <div className="name-links">
                    <h1 className="name">William Berlin</h1>
                    <p className="job-title">Web Developer</p>
                    <a href="https://github.com/WilliamBerlin76">
                        <i className="fab fa-github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/william-berlin-75695b193/">
                        <i class="fab fa-linkedin"/>
                    </a>
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default HeaderLayout;