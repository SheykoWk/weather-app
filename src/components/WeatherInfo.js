const WeatherInfo = ({cloudy, humidity, wind, rain}) => {
    return(
        <ul className='weather-info'>
            <li>
                <h2>Weather Details</h2>
            </li>
            <div className='separator'></div>
            <li>
                <div className='weather-info__content'>
                    <h3 
                className='weather-info__content-title'>Cloudy</h3>
                    <span 
                    className='weather-info__content-data'>{cloudy}%</span>
            </div>
            </li>
            <li>
                <div className='weather-info__content'>
                    <h3 
                    className='weather-info__content-title'>Humidity</h3>
                    <span 
                    className='weather-info__content-data'>{humidity}%</span>
                </div>
            </li>
            <li>
                <div className='weather-info__content'>
                    <h3 
                    className='weather-info__content-title'>Wind</h3>
                    <span 
                    className='weather-info__content-data'>{wind}</span>
                </div>
            </li>
            <li>
                <div className='weather-info__content'>
                    <h3 
                    className='weather-info__content-title'>Rain</h3>
                    <span 
                    className='weather-info__content-data'>{rain}mm</span>
                </div>
            </li>
        </ul>
    )
}
export default WeatherInfo