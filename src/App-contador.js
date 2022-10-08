import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Cliks: {count}</p>
      <button onClick={handleClick}>Clik me</button>
    </>
  );
};

export default App;
