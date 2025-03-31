import axios from 'axios';

const API_KEY = 'b73ae012d9522fe36ee43081f7eed010';

export const fetchWeatherData = async (cityName) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};
