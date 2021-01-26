import React, { useState } from 'react';

const ContactForm = () => {
    // hook that manages form data, starting with setting initial states to empty values
    const [ formState, setFormState ] = useState({name: '', email: '', message: ''});

    // simplifies assignment of initial state within the JSX statement
    const { name, email, message } = formState;

    // event handler function syncs internal state of component formState with user input from the DOM
    function handleChange(e) {
        // UI value is assigned to e.target.name and reassigned as e.target.value to the associated formState property; the spread value retains the other key:value property values not currently being updated
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    // logs formState object when submit button is clicked
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
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
                    <input type='text' name='name' defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;