import { ajax } from '../tools/ajax';

export const getCities = async (countryCode) => {
  const optionsRequest = {
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places',
    headers: {
      'X-RapidAPI-Key': '3ce8fd1553mshcb4453fa0615f00p1b1909jsn98c55092a480',
      'X-RapidAPI-Host': 'spott.p.rapidapi.com',
    },
    params: {
      limit: 10,
      type: 'CITY',
      country: countryCode ?? 'US',
    },
  };
  return await ajax(optionsRequest);
};
