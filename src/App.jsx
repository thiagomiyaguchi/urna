import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [digito1, setDigito1] = useState(null);
  const [digito2, setDigito2] = useState(null);

  useEffect(() => {
    const botao = document.querySelectorAll('.numero');
    botao.forEach((item) => {
      item.addEventListener('click', mostraDigito);
    });
    return () =>
      botao.forEach((item) => {
        item.removeEventListener('click', mostraDigito);
      });
  }, [digito1]);

  const mostraDigito = (e) => {
    digito1 ? setDigito2(e.target.innerText) : setDigito1(e.target.innerText);
    console.log(e.target.innerText);
  };
  return (
    <div className='App'>
      <h1>Votação Colégio Trivium</h1>
      <div className='painel'>
        <div className='tela'>
          <h2>Presidente</h2>
          <span>{digito1}</span>
          <span>{digito2}</span>
        </div>
        <div className='teclas'>
          <button className='numero'>1</button>
          <button className='numero'>2</button>
          <button className='numero'>3</button>
          <button className='numero'>4</button>
          <button className='numero'>5</button>
          <button className='numero'>6</button>
          <button className='numero'>7</button>
          <button className='numero'>8</button>
          <button className='numero'>9</button>
          <button className='numero zero'>0</button>
          <button className='branco'>Branco</button>
          <button>Corrige</button>
          <button>Confirma</button>
        </div>
      </div>
    </div>
  );
}

export default App;
