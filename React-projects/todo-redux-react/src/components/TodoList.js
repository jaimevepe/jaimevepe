import React from 'react';
import '../App.css';
class TodoList extends React.Component {
    //runs once in the beggining and sets things up
    
    render() {
      return (
        <div>
          <ul>
            {
              this.props.todos.map( todo => {
                let classString = todo.isComplete ? 'completed' : '';
                return (
                  <li className={classString}
                    key={todo.id}
                    onClick={() => {
                      this.props.toggleComplete(todo.id)
                    }}
                  >
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