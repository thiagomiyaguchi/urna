import('./Tela.css');

function Tela(props) {
  return (
    <div className='tela'>
      <h2>Presidente</h2>
      <div className='digitos'>
        <span>{props.digito1}</span>
        <span>{props.digito2}</span>
      </div>
      {props.candidato.nome && (
        <div className='candidato'>
          <p>Nome: {props.candidato.nome}</p>{' '}
          <img src={props.candidato.foto} alt='Imagem do Candidato' />
        </div>
      )}
      {props.candidato.nulo && <p>Voto Nulo</p>}
    </div>
  );
}

export default Tela;
