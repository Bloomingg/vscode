import React from 'react'

import CmtsItem from './CtmsItem'
import Ctms from '../css/Ctms.css'
console.log(Ctms);

class Coments extends React.Component {
  constructor() {
    super()
    this.state = {
      cmtList: [
        { id: 0, name: 1111, content: "我是第一条" },
        { id: 1, name: 2222, content: "我是第二条" },
        { id: 2, name: 3333, content: "我是第三条" },
        { id: 3, name: 4444, content: "我是第四条" },
        { id: 4, name: 5555, content: "我是第五条" },
      ]
    }
  }
  render() {
    return (
      <div style={{ margin: '100px auto' }}>
        <h3 style={{ color: 'red', fontSize: '24px' }}>这是一个评论组件</h3>
        {this.state.cmtList.map(item =>
          <CmtsItem {...item} key={item.id} />
        )}
      </div>
    )
  }
}
export default Coments