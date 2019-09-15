import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';

export default function ProfilePic() {
    const [photo, setPhoto] = useState([]);
    
    useEffect(() => {
        axios.
        get(`https://api.github.com/users/WilliamBerlin76`)
        .then(response => {
            const pic = response.data.avatar_url
            console.log(pic);
        })
        .catch(error => {
            console.log(`No picture for you`, error);
        })
    }, []);


    return(
        <h1>Hello World!</h1>
    )
};