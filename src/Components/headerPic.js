import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import HeaderLayout from './header'
export default function ProfilePic() {
    const [photo, setPhoto] = useState([]);
    
    useEffect(() => {
        axios.
        get(`https://api.github.com/users/WilliamBerlin76`)
        .then(response => {
            const pic = response.data.avatar_url
            console.log(pic);
            setPhoto(pic)
        })
        .catch(error => {
            console.log(`No picture for you`, error);
        })
    }, []);

const HeaderContainer = styled.header`
    background: rgb(48, 27, 48);
`;
    return(
        <HeaderContainer>
            <HeaderLayout key={photo} imgUrl={photo}/>
        </HeaderContainer>
    )
};