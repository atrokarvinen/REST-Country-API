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

    const CountryCardText = (label: string, textValue: string): JSX.Element => {
        return (
            <span>
                <span className="info-text-bold">{label}: </span>
                {textValue ?? 'N/A'}
            </span>
        )
    }

    return (
        <div className="country-card" onClick={() => countryCardClicked(country)}>
            <img className="country-card__img"
                src={country.flags.svg}
                alt=''
                style={{ borderBottom: '1px solid black' }} />
            <div className="country-card__info">
                <h2>{countryName}</h2>
                {CountryCardText("Population", population.toLocaleString())}
                {CountryCardText("Region", region)}
                {CountryCardText("Capital", capital)}
            </div>
        </div>
    )
}
