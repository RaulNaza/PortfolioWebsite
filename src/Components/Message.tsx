import photo from '../assets/Professional Photo.jpeg'
import linkedIn from '../assets/linkedin.png'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'

import { messageAPI } from '../API/MessageAPI'
import { useState } from 'react'

function Message() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: any): Promise<void> => {
        event.preventDefault();

        if (name === "" || name === "Please provide a name.") {
            setName('Please provide a name.');
        } else {
                try {
                const messageObject = {
                    name: name,
                    email: email,
                    message: message
                };
                await messageAPI.post(messageObject);
                console.log("Message has been submitted");

                setName('');
                setEmail('');
                setMessage('');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="container">
            <div className="message" id="Message">
                <div className='contact-card'>
                    <img className='contact-image' src={photo} alt='photo of author' />
                    <div className='contact-links'>
                        <div className='link-container'>
                            <img
                                className='footer-icon'
                                src={linkedIn}
                                alt='linkedIn icon' />
                            <a
                                className='social-link'
                                href='https://www.linkedin.com/in/raulnazariog/'
                                rel='noopener noreferrer'
                                target='_blank'>
                                LinkedIn
                            </a>
                        </div>
                        <div className='link-container'>
                            <img
                                className='footer-icon'
                                src={github}
                                alt='github icon' />
                            <a
                                className='social-link'
                                href='https://github.com/RaulNaza'
                                rel='noopener noreferrer'
                                target='_blank'>
                                Github
                            </a>
                        </div>
                        <div className='link-container'>
                            <img
                                className='footer-icon'
                                src={gmail}
                                alt='gmail icon' />
                            <a
                                className='social-link'
                                href='mailto:raul.nazariogonzales@gmail.com'>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
                <form>
                    <p>Leave me a message!</p>
                    <div className="message-heading">
                        <div className="message-input">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                onChange={(event) => setName(event.target.value)}
                                value={name}></input>
                        </div>
                        <div className="message-input">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}></input>
                        </div>
                    </div>
                    <textarea
                        name="message"
                        placeholder="Look forward to your message!"
                        minLength={1}
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}>
                    </textarea >
                    <button type="submit" onClick={(event) => handleSubmit(event)}>Submit</button>
                </form>
            </div>
        </div>
    )

};

export default Message;