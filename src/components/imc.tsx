'use client';

import { useState } from 'react';

const Imc = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  function handleClick() {
    const pesoFloat = Number(peso);
    const alturaFloat = Number(altura);
    const total = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(2);
    setImc(total);
  }

  return (
    <div>
      <label htmlFor="peso">Peso:</label>
      <input
        type="text"
        placeholder="peso"
        id="peso"
        value={peso}
        onChange={(event) => setPeso(event.target.value)}
      />
      <label htmlFor="altura">Altura:</label>
      <input
        type="text"
        placeholder="altura"
        id="altura"
        value={altura}
        onChange={(event) => setAltura(event.target.value)}
      />
      <button onClick={handleClick}>Calcular IMC</button>
      <h2>Resultado: {imc}</h2>
    </div>
  );
};

export default Imc;
