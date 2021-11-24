import { Country } from "../models/country";
import { Region } from "../models/region";

export interface ICountryProvider {
    GetCountriesAsync(): Promise<Country[]>
    GetRegions(countries: Country[]): Region[];
    FilterCountriesByName(countries: Country[], filter: string): Country[];
    FilterCountriesByRegion(countries: Country[], region: string): Country[];
}