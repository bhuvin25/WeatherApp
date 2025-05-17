import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherData } from '../services/WeatherService';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (cityName, { rejectWithValue }) => {
    try {
      const data = await fetchWeatherData(cityName);
      return { data, city: cityName };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
    loading: false,
    error: null,
    city: '',
  },
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload.data;
        state.city = action.payload.city;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;