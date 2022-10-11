import { ajax } from '../tools/ajax';

export const getCityWeather = async (city) => {
  const optionsRequest = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      q: city,
      appid: 'dcb7be52d907148b94dbc59632742a7c',
      units: 'metric',
    },
  };
  return await ajax(optionsRequest);
};
