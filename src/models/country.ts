import { CountryImage } from "./countryImage";
import { CountryName } from "./countryName";
import { Currency } from "./currency";

export interface Country {
    altSpellings: string[]
    area: number
    borders: string[]
    capital: string
    cca3: string
    cioc: string
    coatOfArms: CountryImage
    continents: string[]
    currencies: Record<string, Currency>
    flags: CountryImage
    independent: boolean
    landlocked: boolean
    languages: Record<string, string>,
    latlng: number[]
    maps: { googleMaps: string, openStreetMaps: string }
    name: CountryName
    population: number
    region: string
    subregion: string
    timezones: string[]
    unMember: boolean

    // altSpellings: (2) ['AF', 'Afġānistān']
    // area: 652230
    // borders: (6) ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN']
    // capital: ['Kabul']
    // capitalInfo: {latlng: Array(2)}
    // car: {signs: Array(1), side: 'right'}
    // cca2: "AF"
    // cca3: "AFG"
    // ccn3: "004"
    // cioc: "AFG"
    // coatOfArms: {png: 'https://mainfacts.com/media/images/coats_of_arms/af.png', svg: 'https://mainfacts.com/media/images/coats_of_arms/af.svg'}
    // continents: ['Asia']
    // currencies: {AFN: {…}}
    // demonyms: {eng: {…}, fra: {…}}
    // fifa: "AFG"
    // flag: "🇦🇫"
    // flags: {png: 'https://upload.wikimedia.org/wikipedia/commons/thu…the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png', svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg'}
    // idd: {root: '+9', suffixes: Array(1)}
    // independent: true
    // landlocked: true
    // languages: {prs: 'Dari', pus: 'Pashto', tuk: 'Turkmen'}
    // latlng: (2) [33, 65]
    // maps: {googleMaps: 'https://goo.gl/maps/BXBGw7yUUFknCfva9', openStreetMaps: 'https://www.openstreetmap.org/relation/303427'}
    // name: {common: 'Afghanistan', official: 'Islamic Republic of Afghanistan', nativeName: {…}}
    // population: 2837743
    // region: "Asia"
    // startOfWeek: "monday"
    // status: "officially-assigned"
    // subregion: "Southern Asia"
    // timezones: ['UTC+04:30']
    // tld: ['.af']
    // translations: {ara: {…}, ces: {…}, cym: {…}, deu: {…}, est: {…}, …}
    // unMember: true
}