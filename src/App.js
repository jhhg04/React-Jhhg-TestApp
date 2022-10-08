import React, { useState, useEffect } from 'react';
import { obtenerPersonaje, obtenerTodo } from './funciones';
import './styles-rym.css';

const App = () => {
  const [url, setUrl] = useState(
    'https://rickandmortyapi.com/api/character/?page=1'
  );
  const [siguiente, setSiguiente] = useState(null);
  const [anterior, setAnterior] = useState(null);
  const [paginas, setPaginas] = useState(null);
  const [total, setTotal] = useState(null);
  const [personajes, setPersonajes] = useState(null);
  const [personaje, setPersonaje] = useState(null);

  const irSiguiente = (url) => setUrl(url);
  const irAnterior = (url) => setUrl(url);

  useEffect(() => {
    obtenerTodo(
      url,
      setSiguiente,
      setPaginas,
      setTotal,
      setPersonajes,
      setAnterior
    );
  }, [url]);

  return (
    <div className='container'>
      <div className='header'>
        <h2>Welcome to Rick & Morty App</h2>
        <p>Total Characters: {total}</p>
        <p>Total Pages: {paginas}</p>
        {anterior !== null ? (
          <button className='button' onClick={() => irAnterior(anterior)}>
            prev
          </button>
        ) : (
          ''
        )}
        {siguiente !== null ? (
          <button className='button' onClick={() => irSiguiente(siguiente)}>
            next
          </button>
        ) : (
          ''
        )}
      </div>

      <div className='main'>
        <div className='list'>
          {personajes !== null
            ? personajes.map((personaje) => (
                <p
                  key={personaje.id}
                  onClick={() => obtenerPersonaje(personaje.id, setPersonaje)}
                >
                  {personaje.name}
                </p>
              ))
            : ''}
        </div>
        <div className='card'>
          {personaje !== null ? (
            <div>
              <h2>{personaje.name}</h2>
              <img src={personaje.image} alt={personaje.name} />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
