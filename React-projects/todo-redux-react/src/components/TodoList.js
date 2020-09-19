import React from 'react';
import '../App.css';
class TodoList extends React.Component {
    //runs once in the beggining and sets things up
    
    render() {
      return (
        <div>
          <ul>
            {
              this.props.todos.map((todo) => {
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
  export default TodoList;