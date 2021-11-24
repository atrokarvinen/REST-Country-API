import './CountryStyles.css'

import { ReactElement, useState } from 'react'
import CountryCards from './CountryCards'
import CountrySearchArea from './CountrySearchArea'
import { Country } from '../models/country'
import { ICountryProvider } from '../services/ICountryProvider'
import { RestCountryProvider } from '../services/RestCountryProvider'

export default function Content(): ReactElement {
    const [countries, setCountries] = useState<Country[]>([])
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

    const restEndPoint: string = 'https://restcountries.com/v3.1/all';
    const countryProvider: ICountryProvider = new RestCountryProvider(restEndPoint);

    return (
        <div className="content">
            <CountrySearchArea
                countries={countries}
                setCountries={setCountries}
                setFilteredCountries={setFilteredCountries}
                countryProvider={countryProvider} />
            <CountryCards countries={filteredCountries} />
        </div>
    )
}
