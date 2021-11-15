import countries from '../../countries.json';
import './CountriesList.css';
import { NavLink } from 'react-router-dom';

export default function CountriesList() {
  return (
    <div
      className="col-5 p-0 m-0"
      style={{ maxHeight: '90vh', overflow: 'scroll' }}
    >
      <div className="list-group  p-0 m-0">
        {countries.map((currentCountry) => {
          return (
            <NavLink
              to={`/${currentCountry.cca3}`}
              className="list-group-item list-group-item-action p-0 m-0"
              key={currentCountry.cca3}
              id={currentCountry.cca3}
            >
              {currentCountry.flag} {currentCountry.name.common}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
