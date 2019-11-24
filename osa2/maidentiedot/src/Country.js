import React from 'react';

const Country = ({country, weather}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>
                capital {country.capital}<br/>
                population {country.population}
            </p>
            <h2>languages</h2>
            <ul>
                {
                    country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)
                }
            </ul>
            <img style={{ maxWidth: 100 }} src={country.flag} alt={`Flag of ${country.name}`}/>
            {
                weather.current ? (
                    <>
                        <h2>Weather in {country.capital}</h2>
                        <p>
                            <b>temperature:</b> {weather.current.temperature} Celcius<br/>
                            <img src={weather.current.weather_icons[0]} alt={`Current weather in ${country.name}`}/><br/>
                            <b>wind:</b> {weather.current.wind_speed} km/h direction {weather.current.wind_dir}
                        </p>
                    </>
                )
                : <></>
            }
        </div>
    )
}

export default Country