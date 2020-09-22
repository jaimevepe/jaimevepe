import React from 'react';
import '../App.css';
class TodoList extends React.Component {
    //runs once in the beggining and sets things up
    
    render() {
      return (
        <div>
          <ul>
            {
              this.props.items.map( todo => {
                let classString = todo.isComplete ? 'completed' : '';
                return (
                  <li 
                  key={todo._id}
                  className={classString}
                    
                  onClick={() => {
                      this.props.toggleComplete(todo.id)
                    }}
                  >
                    {todo.description}
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