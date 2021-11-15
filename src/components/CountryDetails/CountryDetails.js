import countries from '../../countries.json';
import './CountryDetails.css';
import { useParams } from 'react-router-dom';
import CountriesBorders from '../CountriesBorders/CountriesBorders';

export default function CountryDetails() {
  const params = useParams();

  const foundCountry = countries.find(
    (currentCountryObj) => currentCountryObj.cca3 === params.country
  );

  return (
    <div className="col-7 p-0 m-0">
      <h1>{foundCountry.name.common}</h1>
      <table className="table p-0 m-0">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            {foundCountry.capital.map((currentCapital) => {
              return <td>{currentCapital}</td>;
            })}
          </tr>
          <tr>
            <td>Area</td>
            <td>{foundCountry.area}Km²</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className='list-unstyled p-0 m-0'>{CountriesBorders(foundCountry)}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/*        <div  className="col-7">
            <h1>{foundCountry.name.common}</h1>
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
        </div>*/
