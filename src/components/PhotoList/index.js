import React, { useState } from 'react';
// import Modal from '../Modal';

const PhotoList = ({ category }) => {
    // useState() sets default values for array of photos
    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ])

    // goes through each photo in array looking for each that matches user-selected 'category'; each match is returned within 'currentPhotos' array; this array is then mapped and each photo it contains rendered
    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                        // not common practice but useful; takes advantage of incremental naming
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        // used for user-assistance devices like screen-readers
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        // this value must be a unique string
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default PhotoList;