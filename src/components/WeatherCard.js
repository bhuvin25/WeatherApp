import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

const WeatherCard = ({ weather, darkMode }) => {
  if (!weather) return null;

  return (
    <View style={[styles.card, darkMode ? styles.darkCard : styles.lightCard]}>
      <Text style={[styles.cardTitle, darkMode ? styles.darkText : styles.lightText]}>
        {weather.name}
      </Text>
      <Text style={[styles.cardSubtitle, darkMode ? styles.darkText : styles.lightText]}>
        {weather.weather[0].description}
      </Text>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` }}
        style={styles.weatherIcon}
      />
      <Text style={[styles.cardTemp, darkMode ? styles.darkText : styles.lightText]}>
        {weather.main.temp}°C
      </Text>
    </View>
  );
};

export default WeatherCard;
