import React, { Component, createRef } from 'react';

class TodoInput extends Component {
  constructor() {
    super()
    this.state = {
      textValue: ""
    }
    this.TodoTitle = createRef()
  }
  static defaultProps = {
    add: "添加"
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.TodoTitle} onKeyUp={this.handleKeyUp} value={this.state.textValue} onChange={this.handleValueChange} /><button onClick={() => this.addTodoHandle()}>{this.props.add}</button>
      </div>
    );
  }
  handleValueChange = (e) => {
    console.log(e.currentTarget.value);
    this.setState({
      textValue: e.currentTarget.value
    })
  }
  addTodoHandle = () => {
    if (this.state.textValue === "") {
      return false
    }
    this.props.addTodo(this.state.textValue)
    this.setState({
      textValue: ""
    }, () => {
      this.TodoTitle.current.focus()
    })
  }
  handleKeyUp = (e) => {
    // console.log(this.TodoTitle);
    if (e.keyCode === 13) {
      this.addTodoHandle()
    }
  }
}

export default TodoInput;