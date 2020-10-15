import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '665d0e289d7b269b701ab9d561c8f030';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY
        }
    })

    return data;
};
