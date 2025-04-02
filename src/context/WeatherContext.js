import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchWeatherData } from '../services/WeatherService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    const loadLastCity = async () => {
      const savedCity = await AsyncStorage.getItem('lastCity');
      if (savedCity) fetchWeather(savedCity);
    };
    loadLastCity();
  }, []);

  const fetchWeather = useCallback(async (cityName) => {
    setLoading(true);
    setError(null);
  
    try {
      const data = await fetchWeatherData(cityName);
      setWeather(data);
      setCity(cityName);
      await AsyncStorage.setItem("lastCity", cityName);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, loading, error, city, setCity, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
