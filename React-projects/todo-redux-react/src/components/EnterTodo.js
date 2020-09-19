import React, { Component } from 'react'
import '../App.css'

class EnterTodo extends Component {
    handleChange = event => {
        this.props.handleChange(event) // from App.js handllechange
    }
    render() {
        return (
            <div className="App">
                <form onSubmit={this.props.handleSubmit}>
                    <input 
                        type="text"
                        name="newTodo"
                        placeholder="Enter Todo"
                        onChange={this.handleChange} 
                        value={this.props.newTodo} />
                </form>
            </div>
        )
    }
}

export default EnterTodo;