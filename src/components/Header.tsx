import './CountryStyles.css'

import { ReactElement } from 'react'

export default function Header(): ReactElement {
    return (
        <div className="header">
            <h1>What in the world?</h1>
            <button>Dark mode</button>
        </div>
    )
}
