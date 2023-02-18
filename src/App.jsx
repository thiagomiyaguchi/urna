import { useEffect, useState } from 'react';
import './App.css';
import Teclas from './components/Teclas';
import Tela from './components/Tela';

function App() {
  const [digito1, setDigito1] = useState(null);
  const [digito2, setDigito2] = useState(null);
  const [candidato, setCandidato] = useState({});

  useEffect(() => {
    switch (digito1 + digito2) {
      case 0:
        break;
      case '22':
        setCandidato({
          nome: 'Jair Bolsonaro',
          foto: 'bolsonaro.png',
        });
        break;
      case '50':
        setCandidato({
          nome: 'Giovanna Rebizzi',
          foto: 'bolsonaro.png',
        });
        break;
      default:
        setCandidato({ nulo: true });
    }
  }, [digito2]);

  const mostraDigito = (e) => {
    return digito2
      ? null
      : digito1
      ? setDigito2(e.target.innerText)
      : setDigito1(e.target.innerText);
  };

  const corrige = () => {
    setDigito1(null);
    setDigito2(null);
    setCandidato({});
  };

  const confirma = () => {
    setDigito1(null);
    setDigito2(null);
    setCandidato({});
  };

  return (
    <div className='App'>
      <h1>Votação Colégio Trivium</h1>
      <div className='painel'>
        <Tela digito1={digito1} digito2={digito2} candidato={candidato} />
        <Teclas
          corrige={corrige}
          mostraDigito={mostraDigito}
          confirma={confirma}
        />
      </div>
    </div>
  );
}

export default App;
