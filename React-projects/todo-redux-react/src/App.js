import React, { Component } from 'react'
import './App.css';
import TodoApp from './components/TodoApp';

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
      }],
      newTodo: ""
    };
  }


  handleSubmit = event => {
    event.preventDefault()
    if(!this.state.newTodo.trim()) return false; //make sure there is a todo or no todo or a bunch of spaces

    let newTodos = [
      ...this.state.todos,
      {
        id: Date.now(),
        text: this.state.newTodo,
        isComplete: false
      }
    ]

    this.setState({todos: newTodos, newTodo: ""}) // newTodo= "" is to empty out the input field
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  toggleComplete = id => {
    this.setState( copyState => {
      let index = copyState.todos.findIndex(
        oneTodo => oneTodo.id === parseInt(id)
      );
      // had to delete strictMode from index.js
      copyState.todos[index].isComplete = !copyState.todos[index].isComplete
      // flipping is complete to toggle the isComplete between true and false
      return copyState
    })
  }
  // runs everytime state or props change
  render() {
    return (
      <TodoApp
        toggleComplete={this.toggleComplete}
        handleSubmit={this.handleSubmit}
        todos={this.state.todos}
        handleChange={this.handleChange}
        newTodo={this.state.newTodo} />
    )
  }
}


export default App;
