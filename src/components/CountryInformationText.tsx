import React, { ReactElement } from 'react'

interface CountryInformationTextProps {
    label: string,
    textValue: string | number | undefined,
}

export default function CountryInformationText({ label, textValue }: CountryInformationTextProps): ReactElement {
    return (
        <span>
            <span className="info-text-bold">{label}: </span>
            {textValue ?? 'N/A'}
        </span>
    )
}
