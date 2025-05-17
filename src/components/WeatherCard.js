import React from "react";
import { View, Text, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from "../styles/styles";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const weather = useSelector((state) => state.weather.weather);
  const darkMode = useSelector((state) => state.theme.darkMode);

  if (!weather) return null;

  return (
    <LinearGradient
      colors={darkMode ? ["#232526", "#414345"] : ["#4facfe", "#00f2fe"]}
      style={[
        styles.card,
        darkMode ? styles.darkCard : styles.lightCard,
        { shadowColor: darkMode ? "#000" : "#4facfe", shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 }
      ]}
    >
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Text style={[
          styles.cardTitle,
          darkMode ? styles.darkText : styles.lightText,
          { fontSize: 28, fontWeight: "bold", letterSpacing: 1 }
        ]}>
          {weather.name}
        </Text>
        <Text style={[
          styles.cardSubtitle,
          darkMode ? styles.darkText : styles.lightText,
          { fontSize: 18, textTransform: "capitalize", marginTop: 4 }
        ]}>
          {weather.weather[0].description}
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Image
          source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }}
          style={[styles.weatherIcon, { width: 100, height: 100 }]}
          testID="weather-icon"
        />
        <Text style={[
          styles.cardTemp,
          darkMode ? styles.darkText : styles.lightText,
          { fontSize: 48, fontWeight: "bold", marginTop: 8 }
        ]}>
          {Math.round(weather.main.temp)}°C
        </Text>
      </View>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        paddingHorizontal: 10
      }}>
        <View style={{ alignItems: "center" }}>
          <Text style={[
            { fontSize: 14, color: darkMode ? "#bbb" : "#333" }
          ]}>Humidity</Text>
          <Text style={[
            { fontSize: 16, fontWeight: "600", color: darkMode ? "#fff" : "#222" }
          ]}>{weather.main.humidity}%</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={[
            { fontSize: 14, color: darkMode ? "#bbb" : "#333" }
          ]}>Wind</Text>
          <Text style={[
            { fontSize: 16, fontWeight: "600", color: darkMode ? "#fff" : "#222" }
          ]}>{weather.wind.speed} m/s</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={[
            { fontSize: 14, color: darkMode ? "#bbb" : "#333" }
          ]}>Feels Like</Text>
          <Text style={[
            { fontSize: 16, fontWeight: "600", color: darkMode ? "#fff" : "#222" }
          ]}>{Math.round(weather.main.feels_like)}°C</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WeatherCard;