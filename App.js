import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import {ThemeProvider} from "./src/context/ThemeContext";
import {WeatherProvider} from "./src/context/WeatherContext";
import WeatherScreen from "./src/screens/WeatherScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <WeatherProvider>
          <WeatherScreen />
        </WeatherProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
