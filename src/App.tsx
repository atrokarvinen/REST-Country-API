import { useState } from 'react';
import './App.css';
import { Country } from './models/country';


// - See all countries from the API on the homepage
// - Search for a country using an `input` field
// - Filter countries by region
// - Click on a country to see more detailed information on a separate page
// - Click through to the border countries on the detail page
// - Toggle the color scheme between light and dark mode *(optional)*


function App() {
  const [countries, setCountries] = useState<Country[]>([])
  const [countrySearchText, setCountrySearchText] = useState('')

  const getCountriesAll = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const jsonText: Country[] = await response.json()

    jsonText.forEach((country) => {
      // console.log("Name: " + country.name.common + ", Area: " + country.area)
    })

    setCountries(jsonText)
  }

  const displayCountryDetails = (country: Country) => {
    console.log(`Details of country '${country.name.common}': Area = ${country.area}`);
  }

  const displayCountry = (country: Country) => {
    return <div onClick={() => displayCountryDetails(country)}>
      {country.name.common}
      <img src={country.flags.png} alt=''/>
    </div>
  }

  const listCountries = () => {
    return countries.map((country, index) => {
      if (index > 10)
      {
        return null
      }
      return <div key={index}>
        {displayCountry(country)}
      </div>
    })
  }

  console.log(countries.length)

  return (
    <div className="App">
      <div>
        <button onClick={getCountriesAll}>Get countries</button>
        <div>
          <span>Search by name:</span>
          <input value={countrySearchText} onChange={e => setCountrySearchText(e.target.value)}/>
        </div> 
        <div>
          <select>
            <option>Value1</option>
            <option>Value2</option>
            <option>Value3</option>
          </select>
        </div>
      </div>
      <div>
        {listCountries()}
      </div>
    </div>
  );
}

export default App;
