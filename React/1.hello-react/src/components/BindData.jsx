import React from 'react'

export default class BindData extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: "哈哈哈哈"
    }
  }

  render() {
    return (
      <div>
        <h2>React事件绑定</h2>
        <hr />
        <button onClick={() => { this.change(111) }}>点我点我点我</button>
        <hr />
        <h3>{this.state.msg}</h3>
      </div>
    )
  }
  change = (val) => {
    console.log(this.state.msg);
    console.log(val);
    this.setState({
      msg: "红红火火恍恍惚惚"
    }, function () {
      console.log(this.state.msg);
    })

  }
}
