import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const WEATHER_URL = 'https://api.weatherapi.com/v1/current.json?key=6cc33596a0c640a5951130652240502&q=Azerbaijan'

const initialState = {
    weather: [],
    status: 'idle',
    error: null
}

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
    const response = await axios.get(WEATHER_URL);
    return response.data.current.feelslike_c;
  });

const weatherDataSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchWeather.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.weather = action.payload
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const getWeather = (state) => state.weather.weather
export const getWeatherStatus = (state) => state.weather.status
export default weatherDataSlice.reducer