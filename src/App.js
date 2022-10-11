// min 1:10:00
import { useEffect, useState } from 'react';
import { getCountries } from './services/countries';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const countryHandler = (e) => {
    const country = e.currentTarget.value;
    console.log(country);
  };

  console.log(countries);
  return (
    <>
      <div>
        <label>Elige un pais</label>
        <select onChange={countryHandler}>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default App;
