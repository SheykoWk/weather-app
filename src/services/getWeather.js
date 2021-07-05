import axios from "axios";

const getWeather =  (lat, lon) =>{
    const URL = `https://api.weatherapi.com/v1/current.json?key=bf5ce92320604a50b1312030210207&q=${lat},${lon}`;
    const res = axios(URL)
    return res
}
export default getWeather