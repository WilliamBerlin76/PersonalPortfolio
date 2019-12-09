import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState({})
    return (
        <section className='contact-form'>
            <h2>Contact Me!</h2>
            <form>
                <input
                    placeholder='Name'    
                />
                <input
                    placeholder='Email'
                />
                <input
                    placeholder='Subject'
                />
                <textarea
                    placeholder='Message'
                />
                <button>Send</button>
            </form>

        </section>
    )
}

export default Contact;