import React from 'react';
import Home from './index';
import { render, getByTestId, getByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../../components/AppProvider/AppContext';
import AppContainer from '../../components/AppContainer';

describe('unit: Home Page', () => {
  it('renders properly', () => {
    const currentUser = jest.fn();
    const { getByText } = render(
      <AppProvider>
        <AppContainer>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </AppContainer>
      </AppProvider>
    );

    expect(getByText("Toastty")).toBeTruthy();
  })
})