import { useSelector } from "react-redux"
import { IWeatherState } from "../../interfaces/weather"

export const useGetLoading = () => {
    return useSelector(
        (state: IWeatherState) => state.weather.loading
    )
}

export const useGeCity = () => {
    return useSelector(
        (state: IWeatherState) => state.weather.city
    )
}

export const useGeWeatherData = () => {
    return useSelector(
        (state: IWeatherState) => state.weather.data
    )
}