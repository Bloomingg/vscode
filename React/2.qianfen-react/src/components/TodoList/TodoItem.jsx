import React, { Component } from 'react';
const noop = () => { }

class TodoItem extends Component {
  constructor() {
    super()
    this.state = {}
  }

  //按需渲染
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isCompleted !== this.props.isCompleted
  }

  render() {
    console.log("render");
    const {
      isCompleted,
      title
    } = this.props
    return (
      <li>
        <input checked={isCompleted} type="checkbox" onChange={this.handleCheckChange} />
        <span>{title}--{isCompleted ? "完成" : "未完成"}</span>

      </li>
    );
  }
  handleCheckChange = () => {
    // 防止在未传入CompletedChange事件时报错
    // 方法一
    // this.props.CompletedChange&&this.props.CompletedChange(this.props.id)
    // this.props.CompletedChange(this.props.id)

    // 方法二
    const {
      // CompletedChange = () => { },
      CompletedChange = noop,
      id
    } = this.props
    CompletedChange(id)
  }
}

export default TodoItem;