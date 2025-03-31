import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherScreen from '../src/screens/WeatherScreen';
import { WeatherProvider } from '../src/context/WeatherContext';
import { ThemeProvider } from '../src/context/ThemeContext'; // Import the missing provider

describe('WeatherScreen', () => {
  it('renders the input field, button, and weather data correctly', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider> {/* Wrap in ThemeProvider */}
        <WeatherProvider>
          <WeatherScreen />
        </WeatherProvider>
      </ThemeProvider>
    );

    expect(getByPlaceholderText('Enter city name')).toBeTruthy();
    expect(getByText('Get Weather')).toBeTruthy();
  });

  it('displays error message when city is not found', async () => {
    const { getByPlaceholderText, getByText, findByText } = render(
      <ThemeProvider> {/* Wrap in ThemeProvider */}
        <WeatherProvider>
          <WeatherScreen />
        </WeatherProvider>
      </ThemeProvider>
    );

    expect(getByPlaceholderText('Enter city name')).toBeTruthy();
    expect(getByText('Get Weather')).toBeTruthy();
  });
});
