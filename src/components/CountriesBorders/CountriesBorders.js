import { Link } from 'react-router-dom';
import countries from '../../countries.json';

export default function CountriesBorders(props) {
 

  return props.borders.map((currentBorder) => {
    const foundCountry = countries.find(
      (currentCountryObj) => currentCountryObj.cca3 === currentBorder
    );

    
    return (
      <li>
        <Link to={`/${foundCountry.cca3}`} state={true} replace >{foundCountry.name.common}</Link>
      </li>
    );
  });
}
