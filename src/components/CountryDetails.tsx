import './CountryStyles.css'

import React, { ReactElement } from 'react'
import { Country } from '../models/country'
import CountryInformationText from './CountryInformationText'

interface CountryDetailsProps {
    country: Country;
    backButtonClick: () => void;
}

export default function CountryDetails({ country, backButtonClick }: CountryDetailsProps): ReactElement {
    const name = country.name.common
    const nativeName = country.name.official
    const { population, region, subregion, capital, currencies, languages, flags } = country

    const currenciesStr: string = Object.keys(currencies).map(key => currencies[key].name).join(", ");
    const languagesStr: string = Object.keys(languages).map(key => languages[key]).join(", ");

    return (
        <div className="country-details">
            <div className="country-details__back">
                <button onClick={backButtonClick}>Back</button>
            </div>
            <img className="country-details__image" src={flags.png} alt="Country flag" />
            <div className="country-details__info">
                <h1>{name}</h1>
                <CountryInformationText label="Official name" textValue={nativeName}/>
                <CountryInformationText label="Population" textValue={population}/>
                <CountryInformationText label="Region" textValue={region}/>
                <CountryInformationText label="Sub region" textValue={subregion}/>
                <CountryInformationText label="Capital" textValue={capital}/>
                <CountryInformationText label="Currencies" textValue={currenciesStr}/>
                <CountryInformationText label="Languages" textValue={languagesStr}/>
                <span>{`Border countries: ----`}</span>
            </div>
        </div>
    )
}
