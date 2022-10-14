import React, { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import axios from 'axios'

export default function Home() {
    const [city, setCity] = useState("")

    const [data, setData] = useState({
        city:"",
        country:"",
        temp:0,
        description:"",
    })
    
    const handleClick = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96b401f211d5bf67c94a51d2578cca6e`)
            .then((res) => { 
                console.log(res)
                setData({
                    city:res.data.name,
                    country:res.data.sys.country,
                    temp:res.data.main.temp,
                    description:res.data.weather[0].description,
                })
            })
     }

    return (
        <>
            <div className="container text-center my-2">
                <h1>Check Weather</h1>
                <input type="text" className='form-control' value={city} onChange={(e)=>{
                    setCity(e.target.value);
                }}/>
                <button className='btn-btn-primary my-2' type='submit' onClick={handleClick}>get weather</button>
                </div>

                {/* <div>{data.description}</div> */}
                <WeatherInfo text={data}/>
        </>
    )
}




