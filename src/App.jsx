import { useEffect, useState } from 'react';
import './App.css';
import Teclas from './components/Teclas';
import Tela from './components/Tela';

const getLocalStorage = () => {
  let votos = localStorage.getItem('votos');
  if (votos) {
    return (votos = JSON.parse(localStorage.getItem('votos')));
  } else {
    return [
      { nome: 'Marcela', votos: 0, numero: 13 },
      { nome: 'Pietra', votos: 0, numero: 15 },
      { nome: 'Jair', votos: 0, numero: 22 },
      { nome: 'Vitória', votos: 0, numero: 23 },
      { nome: 'Adhemir', votos: 0, numero: 24 },
      { nome: 'Matheus', votos: 0, numero: 25 },
      { nome: 'Giovanna', votos: 0, numero: 30 },
      { nome: 'Maria Eduarda', votos: 0, numero: 50 },
      { nome: 'Beatriz', votos: 0, numero: 56 },
      { nome: 'Felipe', votos: 0, numero: 77 },
      { nome: 'Branco', votos: 0, numero: '--' },
      { nome: 'Nulos', votos: 0 },
    ];
  }
};

function App() {
  const [digito1, setDigito1] = useState(null);
  const [digito2, setDigito2] = useState(null);
  const [candidato, setCandidato] = useState({});
  const [votos, setVotos] = useState(getLocalStorage());

  useEffect(() => {
    switch (digito1 + digito2) {
      case 0:
        break;
      case '13':
        setCandidato({
          nome: 'Marcela',
          foto: 'bolsonaro.png',
        });
        break;
      case '15':
        setCandidato({
          nome: 'Pietra',
          foto: 'bolsonaro.png',
        });
        break;
      case '22':
        setCandidato({
          nome: 'Jair Bolsonaro',
          foto: 'bolsonaro.png',
        });
        break;
      case '23':
        setCandidato({
          nome: 'Vitória',
          foto: 'bolsonaro.png',
        });
        break;
      case '24':
        setCandidato({
          nome: 'Adhemir Calixto',
          foto: 'bolsonaro.png',
        });
        break;
      case '25':
        setCandidato({
          nome: 'Matheus',
          foto: 'bolsonaro.png',
        });
        break;
      case '30':
        setCandidato({
          nome: 'Giovanna Rebizzi',
          foto: 'bolsonaro.png',
        });
        break;
      case '50':
        setCandidato({
          nome: 'Maria Eduarda',
          foto: 'bolsonaro.png',
        });
        break;
      case '56':
        setCandidato({
          nome: 'Beatriz',
          foto: 'bolsonaro.png',
        });
        break;
      case '77':
        setCandidato({
          nome: 'Felipe Otávio',
          foto: 'bolsonaro.png',
        });
        break;
      case '--':
        setCandidato({
          nome: 'Branco',
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
    switch (digito1 + digito2) {
      case 0:
        break;
      case '13':
        setVotos({ ...votos }, votos[0].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '15':
        setVotos({ ...votos }, votos[1].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '22':
        setVotos({ ...votos }, votos[2].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '23':
        setVotos({ ...votos }, votos[3].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '24':
        setVotos({ ...votos }, votos[4].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '25':
        setVotos({ ...votos }, votos[5].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '30':
        setVotos({ ...votos }, votos[6].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '50':
        setVotos({ ...votos }, votos[7].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '56':
        setVotos({ ...votos }, votos[8].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '77':
        setVotos({ ...votos }, votos[9].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;
      case '--':
        setVotos({ ...votos }, votos[10].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        break;

      default:
        setVotos({ ...votos }, votos[11].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
    }

    setDigito1(null);
    setDigito2(null);
    setCandidato({});
  };

  const branco = () => {
    setDigito1('-');
    setDigito2('-');
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
          branco={branco}
        />
      </div>
    </div>
  );
}

export default App;
