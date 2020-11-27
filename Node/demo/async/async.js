// 1.函数嵌套（回调地狱）
// const fs = require('fs')

// fs.readFile('./1.txt', 'utf8', (err, res1) => {
//   console.log(res1);
//   fs.readFile('./2.txt', 'utf8', (err, res2) => {
//     console.log(res2);
//     fs.readFile('./3.txt', 'utf8', (err, res3) => {
//       console.log(res3);
//     })
//   })
// })

// 2.Promise方式解决回调地狱
// const fs = require('fs')


// function p1() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./1.txt', 'utf8', (err, res) => {
//       resolve(res)
//     })
//   })
// }

// function p2() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./2.txt', 'utf8', (err, res) => {
//       resolve(res)
//     })
//   })
// }

// function p3() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./3.txt', 'utf8', (err, res) => {
//       resolve(res)
//     })
//   })
// }

// p1().then((res1) => {
//   console.log(res1);
//   return p2()
// }).then((res2) => {
//   console.log(res2);
//   return p3()
// }).then((res3) => {
//   console.log(res3);
// })


// 3.异步函数解决
// 在普通函数定义的前面加上async关键字 普通函数就变成了异步函数
// async function fn() {
//   // 执行throw抛出错误后不会继续执行后续代码
//   throw '异步函数通过throw关键字抛出错误信息（reject）'
//   return 123;
// }
// // 异步函数默认的返回值就是promise对象
// fn().then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// })

// await关键字
// 只出现在异步函数(async)中 可以暂停异步函数的执行
// const fs = require('fs')

// async function p1() {
//   fs.readFile('./1.txt', 'utf8', (err, res) => {
//     return console.log(res);
//   })
// }

// async function p2() {
//   fs.readFile('./2.txt', 'utf8', (err, res) => {
//     return console.log(res);
//   })
// }

// async function p3() {
//   fs.readFile('./2.txt', 'utf8', (err, res) => {
//     return console.log(res);
//   })
// }

// async function run() {
//   await p1()
//   await p2()
//   await p3()
// }
// run()


// promisify方法 可以将指定方法转换为promise方法
const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)

async function run () {
  let r1 = await readFile('./1.txt','utf8')
  let r2 = await readFile('./2.txt','utf8')
  let r3 = await readFile('./3.txt','utf8')
  console.log(r1);
  console.log(r2);
  console.log(r3);
}
run()