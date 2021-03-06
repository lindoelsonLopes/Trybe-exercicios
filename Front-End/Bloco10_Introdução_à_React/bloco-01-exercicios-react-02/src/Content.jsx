import { Component } from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends Component {
  render() {
    return (
      <div>
          {conteudos.map((el) => (
          <div key={el.conteudo} className='card'>
              <h4>{`O conteudo é: ${el.conteudo}`}</h4>
              <p>{`status: ${el.status}`}</p>
              <p>{`bloco: ${el.bloco}`}</p>
          </div>
          ))}
      </div>
    );
  }
}

export default Content;