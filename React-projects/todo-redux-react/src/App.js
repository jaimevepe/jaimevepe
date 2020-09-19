import React, { Component } from 'react'
import './App.css';

class App extends Component {
  //runs once in the beggining and sets things up
  constructor(props){
    super(props);
    this.state = {
      todos: [{
        id: 1,
        text: "Call mom",
        isComplete: false
      }, {
        id: 2,
        text: "Take a shower",
        isComplete: false
      }]
    }
  }
  // runs everytime state or props change
  render() {
    return (
      <div>
        <h3 className="App">Todo App</h3>
        <ul>
          {
            this.state.todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default App;
