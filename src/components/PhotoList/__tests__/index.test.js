import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup);

// const photos = [
//     {
//         name: 'Park bench',
//         category: 'landscape',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//     }
// ]

// const mockCurrentPhoto = jest.fn();

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList />);
    });
    
    it('matches snapshot', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
})