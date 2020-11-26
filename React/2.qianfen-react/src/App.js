import React, { Component } from 'react'

import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      todos:[
        {
          id:0,
          title:'吃饭',
          isCompleted:false
        },
        {
          id:1,
          title:'睡觉',
          isCompleted:true
        }
      ],
      desc:"今日事，今日毕",
      add:"添加待办"
    }
  }
  render() {
    return (
      <>
        <TodoHeader desc={this.state.desc}>
          今日待办事项列表
        </TodoHeader>
        <TodoInput addTodo={this.addTodo} add={this.state.add}/>
        <TodoList CompletedChange={this.CompletedChange} todos={this.state.todos}/>
        <Like/>
      </>
    )
  }
  addTodo=(title)=>{
    console.log(title);
    // let newArr=[...this.state.todos]
    // push方法返回的是数组的长度
    //   newArr.push({
    //       id:Math.random(),
    //         title:title,
    //         isCompleted:false
    //   })
    this.setState({
      todos:this.state.todos.concat({
          id:Math.random(),
            title:title,
            isCompleted:false
      })
      
      // todos:newArr
    },()=>{
      console.log(this.state.todos);
    })
  }
  CompletedChange=(id)=>{

    this.setState({
      todos:this.state.todos.map(todo=>{
        if(todo.id===id){
          todo.isCompleted=!todo.isCompleted
        }
        // console.log(todo);
        return todo
      })
    })
    // this.setState((prevState)=>{
    //   return{
    //     todos:prevState.todos.map(todo=>{
    //       if(todo.id===id){
    //         todo.isCompleted=!todo.isCompleted
    //       }
    //       console.log(todo);
    //       return todo
    //     })
    //   }
    // },
    // ()=>{
    //   console.log(this.state.todos);
    // })
  }
}
