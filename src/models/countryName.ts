export interface CountryName {
    common: string
    official: string
    nativeName: Record<string, { common: string, official: string }>
}