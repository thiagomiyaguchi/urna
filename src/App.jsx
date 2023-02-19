import { useEffect, useState } from 'react';
import './App.css';
import Teclas from './components/Teclas';
import Tela from './components/Tela';
import pi from './pi.mp3';
import somConfirma from './confirma.mp3';
import bolsonaro from './bolsonaro.png';

const getLocalStorage = () => {
  let votos = localStorage.getItem('votos');
  if (votos) {
    return (votos = JSON.parse(localStorage.getItem('votos')));
  } else {
    return [
      { nome: 'Marcela', votos: 0, numero: 13, foto: bolsonaro },
      { nome: 'Pietra', votos: 0, numero: 15, foto: bolsonaro },
      { nome: 'Jair', votos: 0, numero: 22, foto: bolsonaro },
      { nome: 'Vitória', votos: 0, numero: 23, foto: bolsonaro },
      { nome: 'Adhemir', votos: 0, numero: 24, foto: bolsonaro },
      { nome: 'Matheus', votos: 0, numero: 25, foto: bolsonaro },
      { nome: 'Giovanna', votos: 0, numero: 30, foto: bolsonaro },
      { nome: 'Maria Eduarda', votos: 0, numero: 50, foto: bolsonaro },
      { nome: 'Beatriz', votos: 0, numero: 56, foto: bolsonaro },
      { nome: 'Felipe', votos: 0, numero: 77, foto: bolsonaro },
      { nome: 'Branco', votos: 0, numero: '--' },
      { nome: 'Nulos', votos: 0, numero: 'xx' },
    ];
  }
};

function App() {
  const [digito1, setDigito1] = useState(null);
  const [digito2, setDigito2] = useState(null);
  const [candidato, setCandidato] = useState({});
  const [votos, setVotos] = useState(getLocalStorage());
  const [telaFim, setTelaFim] = useState(false);

  useEffect(() => {
    switch (digito1 + digito2) {
      case 0:
        break;
      case '--':
        setCandidato({
          nome: 'Branco',
        });
        break;
      default:
        setCandidato({ nulo: true });
    }
    for (let candidato in votos) {
      if (digito1 + digito2 == votos[candidato].numero) {
        setCandidato({
          nome: votos[candidato].nome,
          foto: votos[candidato].foto,
        });
      }
    }
  }, [digito2]);

  const mostraDigito = (e) => {
    new Audio(pi).play();

    return digito2
      ? null
      : digito1
      ? setDigito2(e.target.innerText)
      : setDigito1(e.target.innerText);
  };

  const corrige = () => {
    new Audio(pi).play();
    setDigito1(null);
    setDigito2(null);
    setCandidato({});
  };

  const confirma = () => {
    new Audio(somConfirma).play();
    let votoNulo = true;

    for (const candidato in votos) {
      if (digito1 + digito2 == votos[candidato].numero) {
        setVotos({ ...votos }, votos[candidato].votos++);
        localStorage.setItem('votos', JSON.stringify(votos));
        votoNulo = false;
      }
    }
    if (votoNulo) {
      setVotos({ ...votos }, votos[11].votos++);
      localStorage.setItem('votos', JSON.stringify(votos));
      votoNulo = false;
    }

    setTelaFim(true);
    setDigito1(null);
    setDigito2(null);
    setCandidato({});
  };

  const branco = () => {
    new Audio(pi).play();
    setDigito1('-');
    setDigito2('-');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTelaFim(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [telaFim]);

  return (
    <div className='App'>
      <h1>Trivium's Election - 2023</h1>
      {telaFim ? (
        <div className='fim'>
          <p className='texto-fim'>FIM</p>
        </div>
      ) : (
        <div className='painel'>
          <Tela digito1={digito1} digito2={digito2} candidato={candidato} />
          <Teclas
            corrige={corrige}
            mostraDigito={mostraDigito}
            confirma={confirma}
            branco={branco}
          />
        </div>
      )}
    </div>
  );
}

export default App;
