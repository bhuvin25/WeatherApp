import React, { useContext, useState } from "react";
import { View, TextInput, Button, ActivityIndicator, Text, Switch, Alert } from "react-native";
import { WeatherContext } from "../context/WeatherContext";
import { ThemeContext } from "../context/ThemeContext";
import WeatherCard from "../components/WeatherCard";
import styles from "../styles/styles";
import useNetworkCheck from "../hooks/useNetworkCheck";

const WeatherScreen = () => {
  const { weather, loading, error, city, setCity, fetchWeather } = useContext(WeatherContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const isConnected = useNetworkCheck();
  const [input, setInput] = useState(city);

  const handleSearch = () => {
    if (!isConnected) {
      Alert.alert("No Internet", "Please check your connection and try again.");
      return;
    }
    if (!input.trim()) {
      Alert.alert("Invalid Input", "Please enter a city name.");
      return;
    }
    fetchWeather(input);
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Switch value={darkMode} onValueChange={toggleTheme} />
      <Text style={[styles.title, darkMode ? styles.darkText : styles.lightText]}>
        Weather App
      </Text>

      <TextInput
        style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
        placeholder="Enter city name"
        placeholderTextColor={darkMode ? "#bbb" : "#555"}
        value={input}
        onChangeText={setInput}
      />

      <Button title="Get Weather" onPress={handleSearch} />

      {loading && <ActivityIndicator size="large" color={darkMode ? "white" : "blue"} />}

      {error && <Text style={[styles.error, darkMode ? styles.darkText : styles.lightText]}>{error}</Text>}

      {weather && <WeatherCard weather={weather} darkMode={darkMode} />}
    </View>
  );
};

export default WeatherScreen;
