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
          <p>{task}</p>
        </li>
      )
    });

    return(
    <div>
      <div>
      <button className="todo" onClick={() => this.handleClickAdd('Clicou')}>
        {'Adicionar tarefa'} 
      </button>
      </div>
      <div>
        <ol>{tasks}</ol>
      </div>
      
    </div>
    )
  }
}

export default App;
