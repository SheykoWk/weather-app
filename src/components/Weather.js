import { useState } from 'react'
const Weather = ({tempCelsious, tempFarenheit, state, country, icon, description}) => {
    const [isCelsious, setIsCelsuios] = useState(true)
    return(
        <div className='weather'>
            <div className='weather-content'>
                <button onClick={() => setIsCelsuios(!isCelsious)}>{isCelsious ? tempCelsious : tempFarenheit}°</button>
                <div>
                    <h3>Click to the number<br/> to change to</h3>
                    <h3>{isCelsious ? "Farenheit" : "Celsious"}</h3>
                </div>
            </div>
            <div className='weather-location'>
                <h3>{state}</h3>
                <h5>{country}</h5>
            </div>
            <div className='weather-icon'>
                <img src={icon} alt=''/>
                <h4>{description}</h4>
            </div>
        </div>
    )
}
export default Weather