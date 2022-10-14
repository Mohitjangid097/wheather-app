import React from 'react'

function WeatherInfo({ text }) {
    return (
        <>
            {text.temp !== 0 ? <div className="container align:'center'"  >
                <h2>{text.city},  {text.country}</h2>
                <h2>temprature is {Math.floor(text.temp - 273.15)} °C, {text.description} </h2>
             </div> : ""}

        </>

    )
}

export default WeatherInfo

