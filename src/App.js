import React, { Component } from 'react';
import './App.css';
import { Button, Input } from 'antd';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    }
  }
  
  handleClickAdd(task) {
    if(task !== ''){
      const todo = this.state.todo;
      this.setState({todo: todo.concat([task])})
    }
    document.getElementById("task").value = "";
    document.getElementById("task").select();
  }

  handleClickRemove(i){
    const remove = this.state.todo.splice(i,1);
    this.setState({todo: this.state.todo})
    return(
      alert(`Removeu o elemento :  ${remove} !`)
    )
  }

  render(){
    const todo = this.state.todo;
    const tasks = todo.map((task, i) => {
      return(
        <li key={i}>
          <Input type="checkbox" name={i} value={task} />{task}
          <Button className="buttonRemover" onClick={() => this.handleClickRemove(i)}>{'Remover tarefa'}</Button>
        </li>
      )
    });

    return(
    <div>
      <div>
        <label>Tarefa:</label>
        <Input type="text" id="task" placeholder="Nova tarefa!"></Input>
        <Button className="todo" type="primary" onClick={() => this.handleClickAdd(document.getElementById("task").value)}>
          {'Adicionar tarefa'} 
        </Button>
      </div>
      <div className="li-tasks">
        <ol>{tasks}</ol>
      </div>
    </div>
    )
  }
}

export default App;
