import './CountryStyles.css'

import { ReactElement } from 'react'
import CountryCards from './CountryCards'
import CountrySearchArea from './CountrySearchArea'

export default function Content(): ReactElement {
    return (
        <div className="content">
            <CountrySearchArea />
            <CountryCards />
        </div>
    )
}
