import { useState } from 'react';

function Counter() {
  const [jumlah, setJumlah] = useState(0);

  const increment = () => setJumlah(jumlah + 1);
  const decrement = () => setJumlah(Math.max(0, jumlah - 1));

  const reset = () => setJumlah(0);

  return (
    <div>
      <h3>Jumlah: {jumlah}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter