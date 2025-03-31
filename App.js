import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import { WeatherProvider } from './src/context/WeatherContext';
import WeatherScreen from './src/screens/WeatherScreen';

const App = () => {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <WeatherScreen />
      </WeatherProvider>
    </ThemeProvider>
  );
};

export default App;
