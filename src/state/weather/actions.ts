import { createAction } from "@reduxjs/toolkit";
import { IWeatherData1 } from "../../interfaces/weather";

export const updateCity = createAction<{city: string}>('UPDATE_CITY');
export const updateLoading = createAction<{loading: boolean}>('UPDATE_LOADING');
export const updateWeather = createAction<{data: IWeatherData1}>('UPDATE_WEATHER');