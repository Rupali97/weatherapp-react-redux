import { createReducer } from "@reduxjs/toolkit";
import { IWeatherData1 } from "../../interfaces/weather";
import { updateCity, updateLoading, updateWeather } from "./actions";

const WEATHER_INITIAL_STATE = {
	city: localStorage.getItem('city') as string || "",
    loading: false,
    data: {} as IWeatherData1,
};

export default createReducer(WEATHER_INITIAL_STATE, (builder) => 

    builder
        .addCase(updateCity, (state, action) => {
            const {city} = action.payload;
            state.city = city;
        })
        .addCase(updateLoading, (state, action) => {
            const {loading} = action.payload
            state.loading = loading;
        })
        .addCase(updateWeather, (state, action) => {
            const {data} = action.payload
            state.data = data
            
        })

)