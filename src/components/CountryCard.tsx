import './CountryStyles.css'

import React, { ReactElement } from 'react'
import { Country } from '../models/country'

interface CountryCardProps {
    country: Country;
    countryCardClicked: (country: Country) => void;
}

export default function CountryCard({ country, countryCardClicked }: CountryCardProps): ReactElement {
    const countryName = country.name.common
    const { population, region, capital } = country

    return (
        <div className="country-card" onClick={() => countryCardClicked(country)}>
            <img className="country-card__img" src={country.flags.png} alt='' />
            <div className="country-card__info">
                <h2>{countryName}</h2>
                <span>{`Population: ${population}`}</span>
                <span>{`Region: ${region}`}</span>
                <span>{`Capital: ${capital ?? 'N/A'}`}</span>
            </div>
        </div>
    )
}
