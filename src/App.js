import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';
import Form from './components/Form';

class App extends Component {
  constructor () {
    super(); //Hereda las funciones de react 
    this.state = {
           todos
           
    };
this.handleAddTodo = this.handleAddTodo.bind(this);

  }


handleAddTodo(todo) {
  this.setState ({
    todos: [...this.state.todos, todo]
  })
}

removeTodo(index) {
  this.setState({
    todos: this.state.todos.filter((e, i) => {
      return i !== index
    })
  })
}
  render () {
    const todos =this.state.todos.map((todo, i) => {
      return (
     <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
                  <h3>{todo.title}</h3>

                  
            </div>
            <div className="card-body">
                      {todo.priority}
              
            <div className="card-body">
                   <p>{todo.description}</p>
                   <p> {todo.responsable}</p>
           
            <div className="card-footer">
              
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
           </button>
            </div>
           </div>
           </div>
        </div>
     </div>
      )     
    })


  return (
    <div className="App">
          <nav className="navbar navbar-dark bg-dark ">
        <a href="" className="text-white">
        Número de formularios

        <span className="badge badge-pill badge-light ml-2">
          { this.state.todos.length }
        </span>
        </a>
        </nav>

    <div className="container">
      <div className="row mt-4">
      <div className="col-md-3">
                 
              <Form onAddTodo={this.handleAddTodo}/>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
              </div>

      </div>
    </div>
        
      
    </div>
  );
}
}
export default App;
