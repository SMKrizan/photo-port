import React from 'react';
// Jest will create simulated DOM in a Node.js environment to approximate the DOM to 'render' the component, followed by 'cleanup' to remove components from the simulated DOM to prevent memory leaking and variable/data collisions between tests
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// React Testing Library's primary guiding principle is it's most important to test the interactions your users will have with the UI
// note that each test only tests for an individual element

// removes memory data after each test to prevent false results
afterEach(cleanup);

// note that 'describe()' is not strictly necessary for tests to run; it is used to organize tests into sections that are typically labeled with the element being tested
describe('About component', () => {
    // renders About tests
    // first test - baseline to verify componenet renders
    // string declares what is being tested (note: 'test' can be used interchangeably with 'it' to create test)
    it('renders', () => {
        // callback function runs the test  
        render(<About />);
    });
    // second test - test case to compare snapshot (serialized) version of DOM node structure
    it('matches snapshot DOM node structure', () => {
        // Arrange - 'asFragment' returns snapshot of About component
        const { asFragment } = render(<About />);
        // Assert - test and compare whether expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
})