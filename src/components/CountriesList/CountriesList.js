import countries from '../../countries.json';
import './CountriesList.css';
import { Link } from "react-router-dom";

export default function CountriesList() {
  return (
    <div>
      <div className="list-group scroll-container">
        {countries.map((currentCountry) => {
          return (
            <Link
              to={currentCountry.cca3}
              className="Linkst-group-item list-group-item-action"
              key={currentCountry.cca3}
              id={currentCountry.cca3}
            >
              <p>
                {currentCountry.flag} {currentCountry.name.common}{' '}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
