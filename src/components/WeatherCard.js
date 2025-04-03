import React from "react";
import { View, Text, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from "../styles/styles";

const WeatherCard = ({ weather, darkMode }) => {
  if (!weather) return null;

  return (
    <LinearGradient
      colors={darkMode ? ["#232526", "#414345"] : ["#4facfe", "#00f2fe"]}
      style={[styles.card, darkMode ? styles.darkCard : styles.lightCard]}
    >
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
        {Math.round(weather.main.temp)}°C
      </Text>
    </LinearGradient>
  );
};

export default WeatherCard;
