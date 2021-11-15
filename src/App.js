import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from "react-router-dom";
import CountriesBorders from './components/CountriesBorders/CountriesBorders';

function App() {
  return (
    <div>
    <Navbar />
    <div className='d-flex flex-row'>
      <CountriesList />
      <Routes>
      <Route path='/:country' element={<CountryDetails/>} />
      <Route path="/:country" element={<CountriesBorders/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
