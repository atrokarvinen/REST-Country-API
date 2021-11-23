import './CountryStyles.css'

import { ReactElement, useState } from 'react'

export default function CountrySearchArea(): ReactElement {
    const [countrySearchText, setCountrySearchText] = useState('')

    const getRegionOptions = () => {
        return (
            <>
                <option>Europe</option>
                <option>Asia</option>
            </>
        )
    }

    return (
        <div className="search-area">
            <input placeholder="Search for a country..." value={countrySearchText} onChange={e => setCountrySearchText(e.target.value)}></input>
            <select placeholder="Select a region...">
                {getRegionOptions()}
            </select>
        </div>
    )
}
