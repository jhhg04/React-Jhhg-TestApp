import { useState, useEffect } from 'react';
import Card from '../Card/Card';

const MainPage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://breakingbadapi.com/api/characters');
      const json = await response.json();
      console.table(json);
      setData(json);
    };
    fetchData();
  }, []);
  const filter = (searchBy) => {
    setSearch(searchBy);
  };

  return (
    <div className='MainPage'>
      <input
        type='text'
        onChange={(e) => filter(e.target.value)}
        placeholder='Walter White'
        className='form-control'
      />
      <div className='row'>
        {data &&
          data.map((item, index) => {
            if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div key={index} className='col-md-4 col-xs-12'>
                  <Card personaje={item} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default MainPage;
