import React, { Component } from 'react'
import TodoList from './TodoList';
import '../App.css'
import EnterTodo from './EnterTodo';

class TodoApp extends Component {
    render() {
        return (
            <div className="App">
               <h3>Todo App</h3>
               <EnterTodo 
                handleSubmit={this.props.handleSubmit}
                handleChange={this.props.handleChange} 
                newTodo={this.props.newTodo} 
                /> 
               <TodoList 
               toggleComplete = {this.props.toggleComplete}
               todos={this.props.todos}/>

            </div>
        )
    }
}

export default TodoApp;