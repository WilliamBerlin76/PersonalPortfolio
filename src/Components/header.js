import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    color: rgb(199, 199, 199);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
`;
const HeaderLayout = props => {
    return(
        <HeaderWrapper key = {props.id}>
            <img src={props.imgUrl}></img>
            <div>
                <h1>William Berlin</h1>
                <p>Web Developer</p>
            </div>
        </HeaderWrapper>
    );
};

export default HeaderLayout;