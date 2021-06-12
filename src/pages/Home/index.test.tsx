import React from 'react';
import Home from './index';
import { render, getByTestId, getByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../../components/AppProvider/AppContext';

describe('unit: Home Page', () => {
  it('renders properly', () => {
    const currentUser = jest.fn();
    const { getByText } = render(
      <AppProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </AppProvider>
    );

    expect(getByText("Toastty")).toBeTruthy();
  })
})