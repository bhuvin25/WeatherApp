import axios from "axios";

const API_KEY = "b73ae012d9522fe36ee43081f7eed010";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (cityName) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: cityName,
        units: "metric",
        appid: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          throw new Error("Bad Request: Please check the city name.");
        case 401:
          throw new Error("Unauthorized: Invalid API Key.");
        case 404:
          throw new Error("City not found. Please enter a valid city.");
        case 500:
          throw new Error("Server Error: Please try again later.");
        default:
          throw new Error("Something went wrong. Please try again.");
      }
    } else if (error.request) {
      throw new Error("No response from server. Please check your connection.");
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

