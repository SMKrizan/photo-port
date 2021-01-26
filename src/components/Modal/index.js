import React, { useState } from 'react';



function Modal({currentPhoto}) {
    const {name, category, description, index} = currentPhoto;

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>Photo name</h3>
                <img alt='current category' src={require(`../../assets/large/${category}/${index}.jpg`).default} />
                <p>{description}</p>
                    <button type='button'>
                        Close this modal
                    </button>
            </div>
        </div>
    );
}

export default Modal;