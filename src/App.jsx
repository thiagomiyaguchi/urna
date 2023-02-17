import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [digito1, setDigito1] = useState(null);
  const [digito2, setDigito2] = useState(null);

  // useEffect(() => {
  //   const botao = document.querySelectorAll('.numero');
  //   botao.forEach((item) => {
  //     item.addEventListener('click', mostraDigito);
  //   });
  //   return () =>
  //     botao.forEach((item) => {
  //       item.removeEventListener('click', mostraDigito);
  //     });
  // }, [digito1]);

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
  };

  return (
    <div className="App">
      <h1>Votação Colégio Trivium</h1>
      <div className="painel">
        <div className="tela">
          <h2>Presidente</h2>
          <div class="digitos">
            <span>{digito1}</span>
            <span>{digito2}</span>
          </div>
        </div>
        <div className="teclas">
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            1
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            2
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            3
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            4
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            5
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            6
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            7
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            8
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero"
          >
            9
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="numero zero"
          >
            0
          </button>
          <button
            class="shadow-drop-2-center"
            onClick={mostraDigito}
            className="branco"
          >
            Branco
          </button>
          <button class="shadow-drop-2-center" onClick={corrige}>
            Corrige
          </button>
          <button class="shadow-drop-2-center">Confirma</button>
        </div>
      </div>
    </div>
  );
}

export default App;
