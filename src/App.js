import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    }
  }
  
  handleClickAdd(task) {
    const todo = this.state.todo;
    this.setState({todo: todo.concat([task])})
    //console.log(todo);
  }

  render(){
    const todo = this.state.todo;
    const tasks = todo.map((task, i) => {
      return(
        <li key={i}>
          <input type="checkbox" name={i} value={task} />{task}
          <button class="buttonRemover" onClick={() => alert('Tentou Remover mas não conseguiu!')}>{'Remover tarefa'}</button>
        </li>
      )
    });

    return(
    <div>
      <div>
        <label>Tarefa:</label>
        <input type="text" id="task"></input>
        <button className="todo" onClick={() => this.handleClickAdd(document.getElementById("task").value)}>
          {'Adicionar tarefa'} 
        </button>
      </div>
      <div class="li-tasks">
        <ol>{tasks}</ol>
      </div>
    </div>
    )
  }
}

export default App;
