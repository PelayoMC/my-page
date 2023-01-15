import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('react', () => {
    const original = jest.requireActual('react');
    return {
        ...original,
        useState: jest.fn(),
        useLocation: jest.fn(),
    };
});

describe('App', () => {

    it('should show the main page', () => {
        useState.mockImplementation((initial) => [initial, jest.fn()]);
        render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        )
    });
});
