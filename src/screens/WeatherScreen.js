import React from "react";
import {
  View,
  TextInput,
  ActivityIndicator,
  Text,
  Switch,
  SafeAreaView,
} from "react-native";
import WeatherCard from "../components/WeatherCard";
import styles from "../styles/styles";
import LinearGradient from "react-native-linear-gradient";
import useWeatherScreenLogic from "../hooks/useWeatherScreenLogic";

const WeatherScreen = () => {
  const {
    weather,
    loading,
    error,
    darkMode,
    input,
    handleInputChange,
    handleThemeToggle,
  } = useWeatherScreenLogic();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={darkMode ? ["#1a1a2e", "#16213e"] : ["#87CEEB", "#4682B4"]}
        style={styles.container}
      >
        <View style={styles.topSection}>
          <Switch value={darkMode} onValueChange={handleThemeToggle} />
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
            onChangeText={handleInputChange}
          />
        </View>

        {loading && <ActivityIndicator size="large" color={darkMode ? "white" : "blue"} />}
        {error && <Text style={[styles.error, darkMode ? styles.darkText : styles.lightText]}>{error}</Text>}

        {weather && !error && <WeatherCard />}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WeatherScreen;