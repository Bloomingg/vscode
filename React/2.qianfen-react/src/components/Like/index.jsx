import React, { Component } from 'react';

class Like extends Component {
  constructor() {
    super()
    this.state = {
      isLike: false
    }
  }
  render() {
    return (
      <span onClick={() => { this.handleClick() }}>
        {this.state.isLike ? "☒喜欢" : "☑不喜欢"}
      </span>
    );
  }
  handleClick = () => {
    //第一种方式
    // this.setState({
    //   isLike: !this.state.isLike
    // })

    //第二种方式
    //setState是异步函数 要获得修改后的state数据，必须在回调中获取
    this.setState((preState, preProps) => {
      console.log(preState);
      console.log(preProps);
      console.log('setState内部：' + this.state.isLike);
      return {
        isLike: !preState.isLike
      }
    }, () => {
      console.log('setState回调：' + this.state.isLike);
    })
    console.log('setState外部：' + this.state.isLike);
  }
}

export default Like;