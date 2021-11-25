import './CountryStyles.css'

import { ReactElement } from 'react'
import { Country } from '../models/country';
import CountryCard from './CountryCard';


interface CountryCardsProps {
  countries: Country[];
  countryCardClicked: (country: Country) => void;
}

export default function CountryCards({ countries, countryCardClicked }: CountryCardsProps): ReactElement {

  const sortCountries = (countries: Country[]): Country[] => {
    const countriesInAlphabeticOrder = countries.sort((countryA, countryB) => {
      const nameA = countryA.name.common;
      const nameB = countryB.name.common;
      if (nameA > nameB) {
        return 1;
      }
      else if (nameA < nameB) {
        return -1;
      }
      else {
        return 0;
      }
    })
    return countriesInAlphabeticOrder;
  }

  const listCountries = () => {
    const sortedCountries = sortCountries(countries)
    return sortedCountries.map((country, index) => {
      if (index > 7) {
        return null
      }
      return <CountryCard key={index} country={country} countryCardClicked={countryCardClicked}/>
    })
  }

  return (
    <div className="country-cards">
      {listCountries()}
    </div>
  )
}
