import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';


const Contact = () => {
    const [message, setMessage] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [subjectErr, setSubjectErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);

    const emailReg = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    
    const handleChanges = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
        message.senderName && setNameErr(false);
        message.subject && setSubjectErr(false);
        message.message && setMessageErr(false);
        message.senderEmail && emailReg.test(message.senderEmail) && setEmailErr(false);
    };
    const sendMessage = e => {
        if (!message.senderName){
            setNameErr(true);
        } 
        if (!message.senderEmail || !emailReg.test(message.senderEmail)){
            setEmailErr(true);
        } 

        if (!message.subject){
            setSubjectErr(true);
        } 

        if (!message.message){
            setMessageErr(true);
        } 
        
        if (message.senderEmail && emailReg.test(message.senderEmail) && message.senderName && message.subject && message.message) {
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
        } else {
            e.preventDefault();
        }
    };
    
    return (
        <section className='contact-form-container' id='contact'>
            <h2>Contact Me!</h2>
            <form className='contact-form'>
                <div className='small-buttons-container'>
                    <div className="input-err-container">
                        <input
                            className='small-input'
                            placeholder='Name'  
                            name='senderName' 
                            onChange={handleChanges} 
                        />
                        {nameErr && (<p className="contact-errors">*Please enter your name</p>)}
                    </div>
                    <div className="input-err-container">
                        <input
                            className='small-input'
                            placeholder='Email'
                            name='senderEmail'
                            onChange={handleChanges}
                        />
                        {emailErr && <p className="contact-errors">*Please enter a valid email</p>}
                    </div>
                </div>
                <input
                    className='form-subject'
                    placeholder='Subject'
                    name='subject'
                    onChange={handleChanges}
                />
                {subjectErr && <p className="contact-errors">*Please add a subject</p>}
                <textarea
                    className='form-message'
                    placeholder='Message'
                    name='message'
                    onChange={handleChanges}
                />
                {messageErr && <p className="contact-errors">*Please add a message</p>}
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