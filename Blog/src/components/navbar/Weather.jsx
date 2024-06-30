import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    TiWeatherCloudy,
    TiWeatherSunny,
    TiWeatherSnow
} from "react-icons/ti";
import {
    fetchWeather,
    getWeather,
    getWeatherStatus
} from '../../features/weatherDataSlice'

const Weather = () => {
    const dispatch = useDispatch()
    const weather = useSelector(getWeather)
    console.log(weather);
    const weatherStatus = useSelector(getWeatherStatus)

    useEffect(() => {
        if (weatherStatus === 'idle') {
            dispatch(fetchWeather());
        }
    }, [weatherStatus, dispatch])

    return (
        <div className='weather'>
            <i className='weather-icon'>
                {
                    weather > 22 ? <TiWeatherSunny style={{color: '#FF9F08'}} />
                        : weather < 0 ? <TiWeatherSnow style={{color: 'lightblue'}}/>
                            : <TiWeatherCloudy style={{color: 'lightblue'}}/>
                }
            </i>
            <span>{weather}</span>
        </div>
    )
}

export default Weather