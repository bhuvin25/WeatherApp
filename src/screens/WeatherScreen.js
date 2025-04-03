import React, { useContext, useState, useCallback } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Switch,
  Alert,
  SafeAreaView,
} from "react-native";
import { WeatherContext } from "../context/WeatherContext";
import { ThemeContext } from "../context/ThemeContext";
import WeatherCard from "../components/WeatherCard";
import styles from "../styles/styles";
import useNetworkCheck from "../hooks/useNetworkCheck";
import LinearGradient from "react-native-linear-gradient";
import debounce from "lodash/debounce";

const WeatherScreen = () => {
  const { weather, loading, error, fetchWeather } = useContext(WeatherContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const isConnected = useNetworkCheck();
  const [input, setInput] = useState("");

  const debouncedFetchWeather = useCallback(
    debounce((city) => {
      if (city.trim().length === 0) return;
  
      if (!isConnected) {
        Alert.alert("No Internet", "Please check your connection and try again.");
        return;
      }
  
      fetchWeather(city);
    }, 500),
    [isConnected, fetchWeather]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={darkMode ? ["#1a1a2e", "#16213e"] : ["#87CEEB", "#4682B4"]}
        style={styles.container}
      >
        <View style={styles.topSection}>
          <Switch value={darkMode} onValueChange={toggleTheme} />
          <Text style={[styles.title, darkMode ? styles.darkText : styles.lightText]}>
            Weather App
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
            placeholder="Enter city name"
            placeholderTextColor={darkMode ? "#bbb" : "#555"}
            value={input}
            onChangeText={(text) => {
              setInput(text);
              debouncedFetchWeather(text);
            }}
          />
        </View>

        {loading && <ActivityIndicator size="large" color={darkMode ? "white" : "blue"} />}
        {error && <Text style={[styles.error, darkMode ? styles.darkText : styles.lightText]}>{error}</Text>}

        {weather && !error && <WeatherCard weather={weather} darkMode={darkMode} />}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WeatherScreen;
