import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';


const Contact = () => {
    const [message, setMessage] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    
    const handleChanges = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    };
    const sendMessage = () => {
        if (!message.senderName || !message.senderEmail || !message.subject || !message.message ) {
            alert('Please fill in all form fields')
        } else {
            setIsFetching(true);
            axios.post(process.env.REACT_APP_API_POST, message)
            .then(res => {
                alert(`Your message was sent.\nThank you for reaching out!`);
                setIsFetching(false);
            })
            .catch(err => {
                console.log(err);
                alert('There was an error sending your message to the server');
                setIsFetching(false);
            });
        }  
    };
    
    return (
        <section className='contact-form-container' id='contact'>
            <h2>Contact Me!</h2>
            <form className='contact-form'>
                <div className='small-buttons-container'>
                    <input
                        className='small-input'
                        placeholder='Name'  
                        name='senderName' 
                        onChange={handleChanges} 
                    />
                    <input
                        className='small-input'
                        placeholder='Email'
                        name='senderEmail'
                        onChange={handleChanges}
                    />
                </div>
                <input
                    className='form-subject'
                    placeholder='Subject'
                    name='subject'
                    onChange={handleChanges}
                />
                <textarea
                    className='form-message'
                    placeholder='Message'
                    name='message'
                    onChange={handleChanges}
                />
                
                { isFetching === true ? 
                    <div className='sending-message'>
                        <ClipLoader 
                            className='loader'
                            color={'#521414'}
                            size={'38'}
                            sizeUnit={'px'}
                        />
                    </div>
                    : 
                    <button className='submit-button' onClick={sendMessage}>Send Message</button>
                }

                
            </form>
        <p style={ {fontSize: '1rem', marginTop: '-15px'} }>Skill logos by <a href='https://icons8.com' target="_blank" rel="noopener noreferrer"> icons8 </a></p>
        </section>
    )
}

export default Contact;