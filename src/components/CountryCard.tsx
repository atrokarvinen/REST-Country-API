import './CountryStyles.css'

import React, { ReactElement } from 'react'
import { Country } from '../models/country'

interface Props {
    country: Country
}

export default function CountryCard({country}: Props): ReactElement {
    const displayCountryDetails = (country: Country) => {
        console.log(`Details of country '${country.name.common}': Area = ${country.area}`);
    }

    const countryName = country.name.common
    const {population, region, capital} = country

    return (
        <div className="country-card" onClick={() => displayCountryDetails(country)}>
            <img className="country-card__img" src={country.flags.png} alt=''/>
            <div className="country-card__info">
                <h2>{countryName}</h2>
                <span>{`Population: ${population}`}</span>
                <span>{`Region: ${region}`}</span>
                <span>{`Capital: ${capital}`}</span>
            </div>
      </div>
    )
}
