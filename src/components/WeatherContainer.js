import { useState, useEffect } from 'react';
import getIp from '../services/getIp';
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
    const [hasDataIp, setHasDataIp] = useState(false);
    const [hasDataWeather, setHasDataWeather] = useState(false)
    //use of use state for the Weather api

    useEffect(() => {
        getIp().then((res) =>{
            setHasDataIp(true)
            setState(res.data.region_name)
            setCountry(res.data.country_name)
            console.log(res.data)
            getWeather(state).then((info) =>{
                setHasDataWeather(true)
                setTempCelcious(info.data.current.temp_c);
                setTempFarenheit(info.data.current.temp_f);
                setImg(images[info.data.current.condition.text].img);
                setIcon(info.data.current.condition.icon);
                setDescription(info.data.current.condition.text);
                setCloudy(info.data.current.cloud);
                setHumidity(info.data.current.humidity);
                setWind(info.data.current.wind_kph);
                setRain(info.data.current.precip_mm);
            })
        })
    }, [state])
    return(
        <div className='weather-container' style={{backgroundImage: `url(${img})`}}>
            {hasDataIp && hasDataWeather ? (
                <>
                <Weather tempCelsious={tempCelsious} tempFarenheit={tempFarenheit} state={state} country={country} icon={icon} description={description}/>
                    <WeatherInfo cloudy={cloudy} humidity={humidity} wind={wind} rain={rain} />
                    </>) : (<Spinner/>)
            }
        </div>
    )
}
export default WeatherContainer