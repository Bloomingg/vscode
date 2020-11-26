import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './components/Hello'
// import Coments from './components/Coments'
import BindData from './components/BindData'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

  // function clock(){
  //   let time=new Date().toLocaleTimeString()
  //   let el = (
  //     <div>
  //       <h1>当前时间为{time}</h1>
  //     </div>
  //   )
  //   let app = document.getElementById('root')
  //   ReactDOM.render(el,app)
  // }
  // setInterval(clock,1000)
  
  //React函数式组件
  // function Clock(props){
  //   return(
  //     <div>
  //       <h1>当前时间为{props.date.toLocaleTimeString()}</h1>
  //     </div>
  //   )
  // }
  // function run(){
  //   ReactDOM.render(<Clock date={new Date()}/>,
  //   document.getElementById('root'))
  // }
  // setInterval(run,1000)


  // ReactDOM.render(<Hello str={['Hello','React']}/>,document.getElementById('root'))
  ReactDOM.render(<BindData />,document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
