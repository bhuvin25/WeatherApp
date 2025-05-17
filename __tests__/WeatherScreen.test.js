import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherScreen from '../src/screens/WeatherScreen';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../src/redux/weatherSlice';
import themeReducer from '../src/redux/themeSlice';

const renderWithRedux = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { weather: weatherReducer, theme: themeReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  return render(<Provider store={store}>{ui}</Provider>, renderOptions);
};

describe('WeatherScreen', () => {
  it('renders the input field correctly', async () => {
    const preloadedState = {
      weather: {
        weather: null,
        loading: false,
        error: null,
        city: '',
      },
      theme: { darkMode: false },
    };

    const { getByPlaceholderText } = renderWithRedux(<WeatherScreen />, { preloadedState });

    expect(getByPlaceholderText('Enter city name')).toBeTruthy();
  });

  it('displays error message when city is not found', async () => {
    const preloadedState = {
      weather: {
        weather: null,
        loading: false,
        error: 'City not found',
        city: '',
      },
      theme: { darkMode: false },
    };

    const { getByText } = renderWithRedux(<WeatherScreen />, { preloadedState });

    expect(getByText('City not found')).toBeTruthy();
  });
});