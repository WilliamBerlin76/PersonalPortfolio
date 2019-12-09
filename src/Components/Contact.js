import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState({});
    
    const handleChanges = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
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
                
                <button className='submit-button'>Send Message</button>
            </form>

        </section>
    )
}

export default Contact;