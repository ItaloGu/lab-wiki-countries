import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import CountriesBorders from './components/CountriesBorders/CountriesBorders';

function App() {
  return (
    <div className=' p-0 m-0'>
      <Navbar />
      <div className="d-flex flex-row justify-content-end p-0 m-0">
        <div className="container  p-0 m-0">
          <div className="row m-0 p-0">
            <CountriesList />
          </div>
        </div>
        <Routes>
          <Route path="/:country" element={<CountryDetails />} />
          <Route path="/:country" element={<CountriesBorders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
