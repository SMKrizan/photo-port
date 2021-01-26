// dependencies
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = { name: 'Fruit bowl', category: 'food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie', index: 0 }
const mockCurrentPhoto = jest.fn();
const mockSetCurrentPhoto = jest.fn();
const mockIsModalOpen = jest.fn();
const mockSetIsModalOpen = jest.fn();
const mockToggleModal = jest.fn();

describe('Modal renders', () => {
    it('renders', () => {
        render(<Modal
            currentPhoto={currentPhoto}
            mockCurrentPhoto={mockCurrentPhoto}
            mockSetCurrentPhoto={mockSetCurrentPhoto}
            mockIsModalOpen={mockIsModalOpen}
            mockSetIsModalOpen={mockSetIsModalOpen}
        />);
    });

    it('matches snapshot DOM node structure', () => {
        // Arrange
        const { asFragment } = render(<Modal
            currentPhoto={currentPhoto}
            mockCurrentPhoto={mockCurrentPhoto}
            mockSetCurrentPhoto={mockSetCurrentPhoto}
            mockIsModalOpen={mockIsModalOpen}
            mockSetIsModalOpen={mockSetIsModalOpen}
        />)
        // Assert
        expect(asFragment()).toMatchSnapshot()
    });
})

describe('Click event', () => {
    it('calls onClose handler', () => {
    // Arrange: Render Modal
    const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
    // Act: Simulate click event
    fireEvent.click(getByText('Close this modal'));
    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})