import './CountryStyles.css'

import { Fragment, ReactElement, useState } from 'react'
import CountryCards from './CountryCards'
import CountrySearchArea from './CountrySearchArea'
import { Country } from '../models/country'
import { ICountryProvider } from '../services/ICountryProvider'
import { RestCountryProvider } from '../services/RestCountryProvider'
import CountryDetails from './CountryDetails'

export default function Content(): ReactElement {
    const [countries, setCountries] = useState<Country[]>([])
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

    const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined)

    const restEndPoint: string = 'https://restcountries.com/v3.1/all';
    const countryProvider: ICountryProvider = new RestCountryProvider(restEndPoint);

    let displayedContent: JSX.Element;

    const isDetailsVisible = selectedCountry !== undefined
    if (isDetailsVisible) {
        displayedContent = <CountryDetails
            country={selectedCountry}
            backButtonClick={() => setSelectedCountry(undefined)}
            countryAbbreviations={countryProvider.GetCountryAbbreviations(countries)} />
    } else {
        displayedContent = (
            <Fragment>
                <CountrySearchArea
                    countries={countries}
                    setCountries={setCountries}
                    setFilteredCountries={setFilteredCountries}
                    countryProvider={countryProvider} />
                <CountryCards countries={filteredCountries} countryCardClicked={country => setSelectedCountry(country)} />
            </Fragment>
        )
    }

    return (
        <div className="content">
            {displayedContent}
        </div>
    )
}
