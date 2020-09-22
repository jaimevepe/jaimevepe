import React, { Component } from 'react'
import './App.css';
import TodoApp from './components/TodoApp';
import axios from 'axios';
import {connect} from 'react-redux'

class App extends Component {
  //runs once in the beggining and sets things up
  constructor(props){
    super(props);
    this.url= `https://gentle-badlands-30099.herokuapp.com/todos`;
    // this.state = {
    //   todos: [],
    //   newTodo: ""
    // };
  }

  // componentDidMount(){
  //   axios(this.url)
  //   .then(res=>{
  //     this.setState({todos: res.data})
  //     console.log('res is: ', res)
  //   })
  //   .catch(err=>{
  //     this.setState({err})
  // })
  // }
    

  // two way data binding
  handleSubmit = event => {
    event.preventDefault()
    if(!this.state.newTodo.trim()) return false; //make sure there is a todo or no todo or a bunch of spaces

    let newTodos = [
      ...this.state.todos, // spread the current todos
      {
        id: Date.now(),
        text: this.state.newTodo,
        isComplete: false
      }
    ]

    this.setState({todos: newTodos, newTodo: ""}) // newTodo= "" is to empty out the input field
  }

  // two way data binding using name and value.
  handleChange = event => {
    //setState handles shallow updates
    this.setState({[event.target.name]: event.target.value})
  }

   //mark todo complete
toggleComplete = id => {
  axios.put(this.url + '/' + id)
  .then(
    res => {
      this.setState(copyState => {
      let index = copyState.todos.findIndex(
        oneTodo => oneTodo.id === parseInt(id)
      );
      copyState.todos[index].isComplete = !copyState.todos[index].isComplete;
      return copyState;
    })
})
  .catch( err => {
    this.setState({err})
  })
}

  // runs everytime state or props change
  render() {
    return (
      <TodoApp
        toggleComplete={this.toggleComplete}
        handleSubmit={this.handleSubmit}
        items={this.props.items}
        handleChange={this.handleChange}
        newTodo={this.props.newTodo} />
    )
  }
}

const mapStateToProps = state => (
  {items: state.todos}
)

export default connect(mapStateToProps)(App);
