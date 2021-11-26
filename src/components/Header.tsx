import './CountryStyles.css'

import { ReactElement } from 'react'

export default function Header(): ReactElement {

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode")
    }

    return (
        <div className="header">
            <h1>What in the world?</h1>
            <button className="header__dark-mode-button" onClick={toggleDarkMode}>
                <img src="moon-light.svg" alt="dark mode moon" />
                <span>Dark mode</span>
            </button>
        </div>
    )
}
