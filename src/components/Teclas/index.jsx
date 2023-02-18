import('./Teclas.css');

function Teclas(props) {
  return (
    <div className='teclas'>
      <button onClick={props.mostraDigito} className='numero'>
        1
      </button>
      <button onClick={props.mostraDigito} className='numero'>
        2
      </button>
      <button onClick={props.mostraDigito} className='numero'>
        3
      </button>
      <button onClick={props.mostraDigito} className='numero'>
        4
      </button>
      <button onClick={props.mostraDigito} className='numero'>
        5
      </button>
      <button onClick={props.mostraDigito} className='numero'>
        6
      </button>
      <button onClick={props.mostraDigito} className='numero'>
        7
      </button>
      <button onClick={props.mostraDigito} className='numero'>
        8
      </button>
      <button onClick={props.mostraDigito} className='numero'>
        9
      </button>
      <button onClick={props.mostraDigito} className='numero zero'>
        0
      </button>
      <button onClick={props.branco} className='branco'>
        Branco
      </button>
      <button onClick={props.corrige} className='corrige'>
        Corrige
      </button>
      <button onClick={props.confirma} className='confirma'>
        Confirma
      </button>
    </div>
  );
}

export default Teclas;
