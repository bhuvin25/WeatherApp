import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import { Provider } from 'react-redux';
import store from './src/redux/store';
import WeatherScreen from "./src/screens/WeatherScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <WeatherScreen />
    </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
