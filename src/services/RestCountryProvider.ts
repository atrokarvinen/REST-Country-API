import { Country } from "../models/country";
import { Region } from "../models/region";
import { ICountryProvider } from "./ICountryProvider";

export class RestCountryProvider implements ICountryProvider {
    restEndPoint: string;

    constructor(restEndPoint: string) {
        this.restEndPoint = restEndPoint;
    }

    async GetCountriesAsync(): Promise<Country[]> {
        const response = await fetch(this.restEndPoint);
        const countries: Country[] = await response.json()

        return countries;
    }

    GetCountryAbbreviations(countries: Country[]): Record<string, Country> {
        const countryAbbreviations: Record<string, Country> = {}
        for (let i = 0; i < countries.length; i++) {
            countryAbbreviations[countries[i].cca3] = countries[i]
        }
        return countryAbbreviations
    }

    GetRegions(countries: Country[]): Region[] {
        const regionNames: string[] = countries.map((country) => country.region)
        const uniqueNames: string[] = Array.from(new Set(regionNames));
        const regions: Region[] = uniqueNames.map((regionName) => { return { name: regionName } })
        return regions;
    }

    FilterCountriesByName(countries: Country[], filter: string): Country[] {
        if (filter.length === 0)
            return countries;

        const filteredCountries = countries.filter((country) => {
            const countryName = country.name.common
            return this.stringIncludesInLowerCase(countryName, filter);
        })
        return filteredCountries;
    }

    FilterCountriesByRegion(countries: Country[], region: string | undefined): Country[] {
        if (region === undefined || region.length === 0)
            return countries;

        const filteredCountries = countries.filter((country) => {
            const regionName = country.region
            return this.stringsMatchInLowerCase(regionName, region);
        })
        return filteredCountries;
    }

    stringsMatchInLowerCase = (stringA: string, stringB: string): boolean => {
        const lowerCaseStringA = stringA.toLowerCase();
        const lowerCaseStringB = stringB.toLowerCase();
        return lowerCaseStringA === lowerCaseStringB;
    }

    stringIncludesInLowerCase = (string: string, searchWord: string): boolean => {
        const lowerCaseString = string.toLowerCase();
        const lowerCaseSearchWord = searchWord.toLowerCase();
        return lowerCaseString.includes(lowerCaseSearchWord);
    }
}