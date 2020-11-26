import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <TodoItem CompletedChange={this.props.CompletedChange} key={todo.id} {...todo} />
          )
        })}
      </ul>
    );
  }
}

export default TodoList;