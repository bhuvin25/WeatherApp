import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard';

describe('WeatherCard', () => {
  it('renders weather details correctly', () => {
    const weatherMock = {
      name: 'Pune',
      main: { temp: 28 },
      weather: [{ description: 'Clear sky', icon: '01d' }],
    };

    const { getByText, getByTestId } = render(<WeatherCard weather={weatherMock} />);

    expect(getByText(/Pune/i)).toBeTruthy();
    expect(getByText(/28/i)).toBeTruthy();
    expect(getByText(/Clear sky/i)).toBeTruthy();
    expect(getByTestId('weather-icon')).toBeTruthy();
  });
});
