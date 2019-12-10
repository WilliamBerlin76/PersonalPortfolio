import React, { useState } from 'react';
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
            axios.post('https://portfolio-messages-backend.herokuapp.com/api/messages', message)
            .then(res => {
                alert(`Your message was sent.\nThank you for reaching out!`);
                setIsFetching(false)
            })
            .catch(err => {
                console.log('SENDING MESSAGE ERR', err)
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
                    <div className='sending-message'>Sending</div> : 
                    <button className='submit-button' onClick={sendMessage}>Send Message</button>
                }

                
            </form>

        </section>
    )
}

export default Contact;