import React from 'react'

export default function Hello(props) {
  console.log(props);
  return (
    <div>
      <span>{props.str[0]}</span>
      <span>{props.str[1]}</span>
    </div>
  )
}