import { Country } from '../models/country'
import { Region } from '../models/region'
import { ICountryProvider } from '../services/ICountryProvider'
import { RestCountryProvider } from '../services/RestCountryProvider'

test("Country REST call returns country list", async () => {
    const countryProvider: ICountryProvider = getCountryProvider();
    const countries: Country[] = await countryProvider.GetCountriesAsync();
    expect(countries.length).toBeGreaterThan(0)
})

test("Empty country list returns no regions", async () => {
    const countryProvider: ICountryProvider = getCountryProvider();
    const regions: Region[] = countryProvider.GetRegions([]);
    expect(regions.length).toBe(0)
})

test("Country list returns correct regions", async () => {
    const countryProvider: ICountryProvider = getCountryProvider();
    
    const countries: Country[] = [getDummyCountry(), getDummyCountry(), getDummyCountry() ,getDummyCountry()];
    countries[0].region = 'Asia';
    countries[1].region = 'Asia';
    countries[2].region = 'Europe';
    countries[3].region = 'America';

    const regions: Region[] = countryProvider.GetRegions(countries);
    expect(regions.length).toBe(3)
    expect(regions).toContainEqual({name: 'Asia'})
    expect(regions).toContainEqual({name: 'Europe'})
    expect(regions).toContainEqual({name: 'America'})
})

function getDummyCountry(): Country {
    return {
        altSpellings: [],
        area: 0,
        borders: [],
        capital: '',
        cca3: '',
        cioc: '',
        coatOfArms: {png: '', svg: ''},
        continents: [],
        currencies: {},
        flags: {png: '', svg: ''},
        independent: false,
        landlocked: false,
        languages: {},
        latlng: [],
        maps: { googleMaps: '', openStreetMaps: '' },
        name: {common: '', nativeName: {}, official: ''},
        population: 0,
        region: '',
        subregion: '',
        timezones: [],
        unMember: false,
    }
}

function getCountryProvider(): ICountryProvider {
    return new RestCountryProvider('https://restcountries.com/v3.1/all')
}