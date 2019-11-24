import React from 'react';

const Country = ({country}) => {
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
        </div>
    )
}

export default Country