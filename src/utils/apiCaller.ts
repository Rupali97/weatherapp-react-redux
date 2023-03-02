import axios from 'axios';

const API_KEY = '99e84e4a7e63c2d3bd757ff7db0315a4'

export const fetchCoords = (query: string) => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${API_KEY}`)
}

export const fetchCurrentAndForecast = (lat: number, lon: number, ) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
}
