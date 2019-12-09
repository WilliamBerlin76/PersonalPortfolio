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
            <form classname='contact form'>
                <input
                    placeholder='Name'  
                    name='senderName' 
                    onChange={handleChanges} 
                />
                <input
                    placeholder='Email'
                    name='senderEmail'
                    onChange={handleChanges}
                />
                <input
                    placeholder='Subject'
                    name='subject'
                    onChange={handleChanges}
                />
                <textarea
                    placeholder='Message'
                    name='message'
                    onChange={handleChanges}
                />
                <button>Send</button>
            </form>

        </section>
    )
}

export default Contact;