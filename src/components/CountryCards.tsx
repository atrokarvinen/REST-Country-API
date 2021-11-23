import './CountryStyles.css'

import React, { ReactElement, useEffect, useState } from 'react'
import { Country } from '../models/country';
import CountryCard from './CountryCard';

export default function CountryCards(): ReactElement {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    getCountriesAll()
  }, [])

  const getCountriesAll = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const jsonText: Country[] = await response.json()

    setCountries(jsonText)
  }

  const listCountries = () => {
    return countries.map((country, index) => {
      if (index > 7) {
        return null
      }
      return <CountryCard key={index} country={country} />
    })
  }

  return (
    <div className="country-cards">
      {listCountries()}
    </div>
  )
}
