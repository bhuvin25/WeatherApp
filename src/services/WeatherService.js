import axios from "axios";
import { WEATHER_API_KEY, WEATHER_BASE_URL } from '../config/apiConfig';


const ERROR_MESSAGES = {
  400: "Bad Request: Please check the city name.",
  401: "Unauthorized: Invalid API Key.",
  404: "City not found. Please enter a valid city.",
  500: "Server Error: Please try again later.",
};

export const fetchWeatherData = async (cityName) => {
  try {
    const { data } = await axios.get(WEATHER_BASE_URL, {
      params: {
        q: cityName,
        units: "metric",
        appid: WEATHER_API_KEY,
      },
    });
    return data;
  } catch (error) {
    if (error.response) {
      const message = ERROR_MESSAGES[error.response.status] || "Something went wrong. Please try again.";
      throw new Error(message);
    }
    if (error.request) {
      throw new Error("No response from server. Please check your connection.");
    }
    throw new Error("An unexpected error occurred.");
  }
};