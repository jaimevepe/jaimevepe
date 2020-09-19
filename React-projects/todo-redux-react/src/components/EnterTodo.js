import React, { Component } from 'react'
import '../App.css'

class EnterTodo extends Component {
    handleChange = event => {
        this.props.handleChange(event) // from App.js handllechange
    }
    render() {
        return (
            <div className="App">
                <form onsubmit={this.props.handleSubmit}>
                    <input 
                        type="text"
                        name="newTodo"
                        placeholder="Enter Todo"
                        onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default EnterTodo;