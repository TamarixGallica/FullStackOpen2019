import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './Filter'
import CountryList from './CountryList'

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const filterChangeHandler = (e) => {
    setFilter(e.target.value);
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
      />
    </div>
  );
}

export default App;
