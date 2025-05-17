import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { toggleTheme } from "../redux/themeSlice";
import useNetworkCheck from "./useNetworkCheck";
import debounce from "lodash/debounce";
import { Alert } from "react-native";

export default function useWeatherScreenLogic() {
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector((state) => state.weather);
  const { darkMode } = useSelector((state) => state.theme);
  const isConnected = useNetworkCheck();
  const [input, setInputLocal] = useState("");

  const debouncedFetchWeather = useCallback(
    debounce((city) => {
      if (city.trim().length === 0) return;
      if (!isConnected) {
        Alert.alert("No Internet", "Please check your connection and try again.");
        return;
      }
      dispatch(fetchWeather(city));
    }, 500),
    [isConnected, dispatch]
  );

  const handleInputChange = (text) => {
    setInputLocal(text);
    debouncedFetchWeather(text);
  };

  const handleThemeToggle = () => dispatch(toggleTheme());

  return {
    weather,
    loading,
    error,
    darkMode,
    input,
    handleInputChange,
    handleThemeToggle,
  };
}