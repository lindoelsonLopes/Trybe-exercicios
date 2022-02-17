import './App.css';
import { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir estudar'];

class App extends Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa))}</ul>
    );
  }
}

export default App;
