export const obtenerTodo = async (
  url,
  setSiguiente,
  setPaginas,
  setTotal,
  setPersonajes,
  setAnterior
) => {
  const peticion = await fetch(url);
  const { info, results } = await peticion.json();
  setSiguiente(info.next);
  setPaginas(info.pages);
  setTotal(info.count);
  setPersonajes(results);
  info.prev !== null ? setAnterior(info.prev) : setAnterior(null);
  console.log(info, results);
};

export const obtenerPersonaje = async (id, setPersonaje) => {
  const peticion = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const result = await peticion.json();

  setPersonaje(result);
};
