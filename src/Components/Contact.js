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
    const sendMessage = e => {
        e.preventDefault();
        if (!message.senderName || !message.senderEmail || !message.subject || !message.message ) {
            alert('Please fill in all form fields')
        } else {
            setIsFetching(true);
            axios.post(`${process.env.REACT_APP_API_POST}`, message)
            .then(res => {
                alert(`Your message was sent.\nThank you for reaching out!`);
                setIsFetching(false)
            })
            .catch(err => {
                alert('There was an error sending your message to the server')
                setIsFetching(false)
            });
        }  
    };
    
    return (
        <section className='contact-form-container'>
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
                    <ClipLoader 
                        className='loader'
                        color={'#521414'}
                        size={'38'}
                        sizeUnit={'px'}
                        
                    />
                    : 
                    <button className='submit-button' onClick={sendMessage}>Send Message</button>
                }

                
            </form>

        </section>
    )
}

export default Contact;