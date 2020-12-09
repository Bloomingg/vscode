function Person(name, age) {
  this.name = name;
  this.age = age;
  this.run = function () {
    console.log(this.name + '---' + this.age);
  }
}

Person.prototype.work = function () {
  console.log('work');
}

// //1.对象冒充实现继承
// function Web(name, age) {
//   Person.call(this, name, age)
// }

// var w = new Web('test', 20)
// w.run()
// //对象冒充继承 无法继承对象原型链上的属性和方法
// w.work() //w.work is not a function


// //2.原型链继承
// Web.prototype = new Person()

// var w = new Web('test', 20)
// //原型链继承 可以继承对象原型链上的属性和方法  但无法给父类传参
// w.run() //undefine
// w.work()


//3.原型链继承+对象冒充继承 可以继承对象原型链上的属性和方法  也可以给父类传参
Web.prototype = new Person()

function Web(name, age) {
  Person.call(this, name, age)
}

var w = new Web('test', 20)
w.run()
w.work()