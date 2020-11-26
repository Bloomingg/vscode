import React, { Component } from 'react';

class TodoHeader extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.children}</h1>
        <h4>{this.props.desc}</h4>
      </div>
    );
  }
}

export default TodoHeader;