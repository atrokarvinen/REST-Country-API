import React, { ReactElement } from 'react'

interface CountryInformationTextProps {
    label: string,
    textValue: string | number | undefined,
}

export default function CountryInformationText({ label, textValue }: CountryInformationTextProps): ReactElement {
    return (
        <p>
            <span className="info-text-bold">{label}: </span>
            {textValue ?? 'N/A'}
        </p>
    )
}
