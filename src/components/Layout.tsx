import './CountryStyles.css'

import { ReactElement } from 'react'
import Content from './Content'
import Header from './Header'

export default function Layout(): ReactElement {
    return (
        <div className="layout">
            <Header />
            <Content />
        </div>
    )
}
