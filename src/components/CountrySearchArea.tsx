/* eslint-disable react-hooks/exhaustive-deps */

import './CountryStyles.css'

import { ReactElement, useEffect, useState } from 'react'
import { ICountryProvider } from '../services/ICountryProvider'
import { Country } from '../models/country'
import { Region } from '../models/region'

interface CountrySearchAreaProps {
    countryProvider: ICountryProvider
    countries: Country[];
    setCountries: (countries: Country[]) => void;
    setFilteredCountries: (countries: Country[]) => void;
}

export default function CountrySearchArea(
    {
        countryProvider,
        countries,
        setCountries,
        setFilteredCountries
    }: CountrySearchAreaProps): ReactElement {
    const [countrySearchText, setCountrySearchText] = useState('')
    const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined)

    useEffect(() => {
        countryProvider.GetCountriesAsync()
            .then(countries => setCountries(countries))
    }, [])

    useEffect(() => {
        filterCountries()
    }, [countries, countrySearchText, selectedRegion])

    const filterCountries = () => {
        const filteredCountriesByName = countryProvider.FilterCountriesByName(countries, countrySearchText)
        const filteredCountries = countryProvider.FilterCountriesByRegion(filteredCountriesByName, selectedRegion)
        setFilteredCountries(filteredCountries)
    }

    const getRegionOptions = () => {
        const regions: Region[] = countryProvider.GetRegions(countries);
        return regions.map((region, index) => {
            return <option key={index} value={region.name} label={region.name}/>
        })
    }

    console.log('selectedRegion: ' + selectedRegion)

    return (
        <div className="search-area">
            <input
                placeholder="Search for a country..."
                value={countrySearchText} 
                onChange={e => setCountrySearchText(e.target.value)} />
            <select
                placeholder="Select a region..."
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}
            >
                 <option value={undefined} label="Select a region..." />
                {getRegionOptions()}
            </select>
        </div>
    )
}
