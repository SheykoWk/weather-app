import { useState, useEffect } from 'react';
import getWeather from '../services/getWeather';
import images from '../images.json';
import Spinner from './Spinner'
import WeatherInfo from './WeatherInfo'
import Weather from './Weather'



const WeatherContainer = () => {

    //initial state

    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [icon, setIcon] = useState('');
    const [description, setDescription] = useState('');
    const [tempCelsious, setTempCelcious] = useState(0);
    const [tempFarenheit, setTempFarenheit] = useState(0);
    const [cloudy, setCloudy] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);
    const [rain, setRain] = useState(0)
    const [img, setImg] = useState('');
    const [hasDataLocation, setHasDataLocation] = useState(false);
    const [hasDataWeather, setHasDataWeather] = useState(false)
    //use of use state for the Weather api

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) =>{
            setHasDataLocation(true)
            getWeather(pos.coords.latitude, pos.coords.longitude).then((res) =>{
                setHasDataWeather(true)
                setState(res.data.location.region)
                setCountry(res.data.location.country)
                setTempCelcious(res.data.current.temp_c);
                setTempFarenheit(res.data.current.temp_f);
                setImg(images[res.data.current.condition.text].img);
                setIcon(res.data.current.condition.icon);
                setDescription(res.data.current.condition.text);
                setCloudy(res.data.current.cloud);
                setHumidity(res.data.current.humidity);
                setWind(res.data.current.wind_kph);
                setRain(res.data.current.precip_mm);
            })
        })
    }, [])
    return(
        <div className='weather-container' style={{backgroundImage: `url(${img})`}}>
            {hasDataLocation && hasDataWeather ? (
                <>
                <Weather tempCelsious={tempCelsious} tempFarenheit={tempFarenheit} state={state} country={country} icon={icon} description={description}/>
                    <WeatherInfo cloudy={cloudy} humidity={humidity} wind={wind} rain={rain} />
                    </>) : (<Spinner/>)
            }
        </div>
    )
}
export default WeatherContainer