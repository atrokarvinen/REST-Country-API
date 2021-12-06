import './CountryStyles.css'

import React, { ReactElement } from 'react'
import { Country } from '../models/country'
import CountryInformationText from './CountryInformationText'

interface CountryDetailsProps {
    country: Country;
    backButtonClick: () => void;
    countryAbbreviations: Record<string, Country>
}

export default function CountryDetails({ country, backButtonClick, countryAbbreviations }: CountryDetailsProps): ReactElement {
    const name = country.name.common
    const officialName = country.name.official
    const nativeNames = country.name.nativeName
    const nativeName = nativeNames === undefined ? "N/A" : Object.values(nativeNames)[0].common
    const { population, region, subregion, capital, currencies, languages, flags, borders } = country

    const languageCount = languages === undefined ? 0 : Object.keys(languages).length;
    let languagesStr: string;
    if (languageCount === 0) {
        languagesStr = "N/A"
    } else {
        languagesStr = Object.keys(languages).map(key => languages[key]).join(", ");
    }
    const languagesLabel = languageCount > 1 ? "Languages" : "Language";

    const currencyCount = currencies === undefined ? 0 : Object.keys(currencies).length;
    let currenciesStr: string;
    if (currencyCount === 0) {
        currenciesStr = "N/A";
    } else {
        currenciesStr = Object.keys(currencies).map(key => currencies[key].name).join(", ");
    }
    const currenciesLabel = currencyCount > 1 ? "Currencies" : "Currency";

    const BorderCountries = (): JSX.Element | JSX.Element[] => {
        const hasBorderCountries = borders?.length > 0
        if (hasBorderCountries) {
            return borders.map(borderCountry => {
                const country = countryAbbreviations[borderCountry]
                const countryName = country.name.common;
                return <button
                    key={countryName}
                    className="border-country-button"
                    disabled>
                    {countryName}
                </button>
            })
        }
        else {
            return <span> Country has no border countries.</span>
        }
    }

    return (
        <div className="country-details">
            <div className="country-details__back">
                <button className="country-details__back__button" onClick={backButtonClick}>
                    <img src={`${process.env.PUBLIC_URL}/corner-down-left-light.svg`} alt="return icon" />
                </button>
            </div>
            <img className="country-details__image" src={flags.svg} alt="Country flag" />
            <div className="country-details__info">
                <h1 className="country-details__info__heading">{name}</h1>
                <div className="country-details__info__texts">
                    <CountryInformationText label="Official name" textValue={officialName} />
                    <CountryInformationText label="Native name" textValue={nativeName} />
                    <CountryInformationText label="Population" textValue={population.toLocaleString()} />
                    <CountryInformationText label="Region" textValue={region} />
                    <CountryInformationText label="Sub region" textValue={subregion} />
                    <CountryInformationText label="Capital" textValue={capital} />
                    <CountryInformationText label={currenciesLabel} textValue={currenciesStr} />
                    <CountryInformationText label={languagesLabel} textValue={languagesStr} />
                </div>
                <div className="country-details__info__border-countries">
                    <span className="info-text-bold" style={{ alignSelf: 'center' }}>Border countries: </span>
                    {BorderCountries()}
                </div>
            </div>
        </div>
    )
}
