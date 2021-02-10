import React, { Component } from "react";

class TodoList extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange (event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo (event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo (event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index,1);
        this.setState({
            items: array
        });
    }

    renderTodos () {
        return this.state.items.map((item) => {
            return  (
                <div className="list-group-item" key={item}>
                    {item} | <button className="btn btn-primary" onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }
    
    
    render () {
        return (
            <div>
                <h1 align="center">Ma Todo list</h1>
                <form  >
                    <input 
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                        className=" row-col offset-2 col-md-7"
                        
                        
                    />
                    
                </form>
                <button className="btn btn-warning row-col offset-4 col-md-3"  onClick={this.addTodo.bind(this)}>Ajouter</button>
                <div className="list-group list-group-flush">
                    {this.renderTodos ()}
                </div>
            </div>
        );
    }
}

export default TodoList;