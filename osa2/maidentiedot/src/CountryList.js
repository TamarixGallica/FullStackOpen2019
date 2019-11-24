import React from 'react';
import Country from './Country';

const CountryList = ({countries, filter, filterValueHandler, capitalChangeHandler, weather}) => {

    const filteredCountries = countries.filter((country) => country.name.toUpperCase().includes(filter.toUpperCase()))

    if(filteredCountries.length > 10) {
        return (<span>Too many matches, specify another filter</span>)
    }

    if(filteredCountries.length === 1) {
        capitalChangeHandler(filteredCountries[0].capital)
        return (<Country country={filteredCountries[0]} weather={weather} />)
    }

    return (
        <div>
            {filteredCountries.map((country) =>
                <span key={country.alpha3Code}>
                    {country.name}
                    <input type="button" value="show" data-country-name={country.name} onClick={filterValueHandler}></input>
                    <br/>
                </span>)}
        </div>
    )
}

export default CountryList