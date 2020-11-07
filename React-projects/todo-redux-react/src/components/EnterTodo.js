import React, { Component } from 'react'
import '../App.css'

class EnterTodo extends Component {
  
    handleSubmit = event => {
        event.preventDefault()
        if(!this.inputNode.value) return false;
        this.props.handleSubmit(this.inputNode.value)
        this.inputNode.value = "";
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="newTodo"
                        placeholder="Enter Todo"
                        ref={node => {this.inputNode = node}}
                        onChange={this.props.handleChange} 
                        value={this.props.newTodo} />
                </form>
            </div>
        )
    }
}

export default EnterTodo;