/*
  Pokemon names List
  Actions to take:
  - When start the app should load the pokemons from json file
  - Add new pokemon names from a textfield
  - Delete pokemon names with you the click name
  - Validate no repeat pokemon names and display an error message
  - The way to call JSON with axios is
    axios.get('pokemons.json')
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [isRepeat, setIsRepeat] = useState(false);

  // const fetchData = () => {
  //   axios
  //     .get('pokemons.json')
  //     .then((response) => {
  //       // console.log(response.data);
  //       setList(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const fetchData = async () => {
    try {
      const { data } = await axios.get('pokemons.json');
      console.log(data);
      setList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeHandler = (e) => {
    setIsRepeat(false);
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newPoke = {
      name: value,
    };
    // console.log('poke== ', value);
    // console.log('newPoke== ', newPoke);
    // const pokemones = list.map((el) => el.name);
    // if (pokemones.includes(newPoke.name)) {
    const pokemones = list.filter((pokemon) =>
      pokemon.name.includes(newPoke.name)
    );
    if (pokemones.length) {
      // console.log('Existe');
      setIsRepeat(true);
    } else {
      setList([...list, newPoke]);
    }
  };

  const deleteHandler = (item) => {
    // console.log('item== ', item);
    const newList = list.filter((poke) => poke.name !== item);
    setList(newList);
  };

  return (
    <div>
      <input type='text' value={value} onChange={changeHandler} />
      {isRepeat && <span>Name already exists</span>}
      <button onClick={submitHandler}>Add</button>
      <hr />
      <ul>
        {list.map((item, index) => (
          <li onClick={() => deleteHandler(item.name)} key={index}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
