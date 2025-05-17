import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard';
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

describe('WeatherCard', () => {
  it('renders weather details correctly', () => {
    const preloadedState = {
      weather: {
        weather: {
          name: 'Pune',
          main: { temp: 28 },
          weather: [{ description: 'Clear sky', icon: '01d' }],
        },
        loading: false,
        error: null,
        city: 'Pune',
      },
      theme: { darkMode: false },
    };

    const { getByText, getByTestId } = renderWithRedux(<WeatherCard />, { preloadedState });

    expect(getByText(/Pune/i)).toBeTruthy();
    expect(getByText(/28/i)).toBeTruthy();
    expect(getByText(/Clear sky/i)).toBeTruthy();
    expect(getByTestId('weather-icon')).toBeTruthy();
  });
});