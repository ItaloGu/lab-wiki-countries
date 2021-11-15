import countries from  '../../countries.json';
import './CountryDetails.css'
import { useParams } from "react-router-dom";
import CountriesBorders from '../CountriesBorders/CountriesBorders';

export default function CountryDetails() {
    const params = useParams();

    const foundCountry = countries.find(
        (currentCountryObj) => currentCountryObj.cca3 === params.country
      );


    return(
        <div className='w-100'>
            <h2>{foundCountry.name.common}</h2>
            <hr/>
            <p><strong>Capital:</strong>{
                foundCountry.capital.map((currentCapital) => {
                   return(<span>{currentCapital}</span>)
            })}</p>
            <hr/>
            <p><strong>Area: </strong>{foundCountry.area}Km²</p>
            <hr/>
            <p><strong>Borders: </strong>
                <ul>
                    {CountriesBorders(foundCountry)}
                </ul>
            </p>
        </div>
    )
}