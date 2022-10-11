import { useEffect, useState } from 'react';
import { getCountries } from './services/countries';
import { getCities } from './services/cities';
import { getCityWeather } from './services/weather';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const countryHandler = async (e) => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null);
  };

  const cityHandler = async (e) => {
    e.currentTarget.value &&
      setWeather(await getCityWeather(e.currentTarget.value));
  };

  console.log(weather);
  return (
    <>
      <div>
        <label>Elige un pais:</label>
        <select onChange={countryHandler}>
          <option value=''>Selecciona</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
      {cities.length > 0 && (
        <div>
          <label>Elige una ciudad:</label>
          <select onChange={cityHandler}>
            <option value=''>Selecciona</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <hr />
      {weather && (
        <div>
          <h2>Actual Temperature: {weather.main.temp}°</h2>
          <p>Min Temperature: {weather.main.temp_min.toFixed()}°</p>
          <p>Max Temperature: {weather.main.temp_max.toFixed()}°</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt='icon'
          />
          {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
        </div>
      )}
    </>
  );
};

export default App;
