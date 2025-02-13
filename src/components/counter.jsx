import React, { useState } from 'react';
import './style.css'; 

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };
  const reset= ()=>
  {
    setCount(initialCount)
  }
  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
      <button onClick={reset}>Reset</button> {/* Ajoutez du texte au bouton Reset */}
    </div>
  );
}

export default Counter;