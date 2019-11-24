import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './Filter'
import CountryList from './CountryList'

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([])
  const [capital, setCapital] = useState('')
  const [weather, setWeather] = useState({})

  if(!process.env.REACT_APP_API_KEY) {
    throw Error('Required API key for api.weatherstack.com is not found in environment variable REACT_APP_API_KEY')
  }

  const countryListHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  const weatherHook = () => {
    if(capital !== '') {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}&units=m`)
        .then(response => {
          setWeather(response.data);
        })
    }
  }

  useEffect(countryListHook, [])
  useEffect(weatherHook, [capital])

  const filterChangeHandler = (e) => {
    setFilter(e.target.value);
  }

  const singleCountryFilterChangeHandler = (e) => {
    setFilter(e.target.attributes['data-country-name'].value);
  }

  const capitalChangeHandler = (capital) => {
    setCapital(capital);
  }

  return (
    <div className="App">
      <Filter
        filter={filter}
        valueChangeHandler={filterChangeHandler}
      />
      <CountryList
        countries={countries}
        filter={filter}
        filterValueHandler={singleCountryFilterChangeHandler}
        capitalChangeHandler={capitalChangeHandler}
        weather={weather}
      />
    </div>
  );
}

export default App;
