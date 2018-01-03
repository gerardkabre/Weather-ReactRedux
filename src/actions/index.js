import axios from 'axios';

const API_KEY = '39c95b65e1878679ff3935f77d193279'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; 


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); 

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}