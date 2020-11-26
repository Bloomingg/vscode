import React from 'react'

export default function CmtsItem(props) {
  return (
    <div style={{ boreder: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' }}>
      <h4 style={{ fontSize: '16px' }}>评论人：{props.name}</h4>
      <span style={{ fontSize: '16px' }}>评论内容：{props.content}</span>
    </div>
  )
}