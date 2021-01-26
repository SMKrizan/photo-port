import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
    // hook manages form data; sets initial states as empty values
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // destructuring formState into named properties in order to simplify assignment of initial state within JSX statement
    const { name, email, message } = formState;

    // hook manages error-state messages
    const [errorMessage, setErrorMessage] = useState('');

    // syncs internal state of formState with user input from the DOM
    function handleChange(e) {
        // targets email input element
        if (e.target.name === 'email') {
            // validates value of email input field using validateEmail to return a boolean
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
            // checks the 'name' and 'message' values to make sure they have values
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // allows the state to be updated with user input if there are no error messages
        if (!errorMessage) {
            // UI value is assigned to e.target.name and reassigned as e.target.value to the associated formState property; the spread value retains the other key:value property values not currently being updated
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    
    
    // logs 'formState' object when submit button is triggered
    function handleSubmit(e) {
        e.preventDefault();
        console.log('formState: ', formState)
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id='contact-form' onSubmit={handleSubmit} >
                {/* name input
                email input
                message area */}
                <div>
                    {/* due to JS keywords, 'for' is replaced here with 'htmlFor' */}
                    <label htmlFor='name'>Name:</label>
                    {/* 'onChange' event listener ensures that handleChange() fires whenever a keystroke is entered into the related field */}
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    {/* 'onBlur' triggers once the user has changed focus from input field */}
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>
                {/* conditionally renders if 'errorMessage' contains a message */}
                {errorMessage && (
                    <div>
                        <p className='error-test'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;