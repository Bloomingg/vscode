"use strict";
// 装饰器 是一种特殊类型的生命，能附加到类声明 方法 属性或参数上 可以修改类的行为
//常见装饰器： 类装饰器 属性装饰器 方法装饰器 参数装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// //不传参方式  普通装饰器
// function logClass(target: any) {
//   console.log(target);
//   target.prototype.apiUrl = "xxxxx"
// }
// @logClass
// class HttpClient {
//   constructor() {
//   }
//   getData() {
//   }
// }
// const http: any = new HttpClient()
// console.log(http.apiUrl);
// //传参方式  装饰器工厂
// function logClass(params: any) {
//   return function (target: any) {
//     console.log('params:' + params);
//     console.log(target);
//     target.prototype.apiUrl = params
//   }
// }
// @logClass('xxx')
// class HttpClient {
//   constructor() {
//   }
//   getData() {
//   }
// }
// const http: any = new HttpClient()
// console.log(http.apiUrl);
// //装饰器中重载
// function logClass(target: any) {
//   return class extends target {
//     apiUrl: any = 123
//     getData() {
//       console.log(this.apiUrl);
//     }
//   }
// }
// @logClass
// class HttpClient {
//   apiUrl: string | undefined
//   constructor() {
//     this.apiUrl = "我是构造函数中的apiUrl"
//   }
//   getData() {
//     console.log(this.apiUrl);
//   }
// }
// const http = new HttpClient()
// http.getData()
// //属性装饰器
// function logProperty(params: any) {
//   return function (target: any, attr: any) {
//     console.log('target:' + target);
//     console.log('attr:' + attr);
//     console.log('params:' + params);
//     target[attr] = params
//   }
// }
// class HttpClient {
//   @logProperty('xxxx')
//   apiUrl: string | undefined
//   constructor() {
//   }
//   getData() {
//     console.log(this.apiUrl);
//   }
// }
// const http = new HttpClient()
// console.log(http.apiUrl);
// //方法装饰器
// function logMethod(params: any) {
//   return function (target: any, methodName: any, desc: any) {
//     console.log('params:' + params);
//     console.log('target:');
//     console.log(target);
//     console.log('methodName:' + methodName);
//     console.log('desc:');
//     console.log(desc);
//     // 扩展类的属性和方法
//     target.apiUrl = 'xxxxx'
//     target.run = function () {
//       console.log('run');
//     }
//     // 修改方法
//     // 保存当前方法
//     const oMethod = desc.value
//     // 将参数均转换为String类型
//     desc.value = function (...args: any[]) {
//       args = args.map((value) => {
//         return String(value)
//       })
//       oMethod.apply(this, args)
//     }
//   }
// }
// class HttpClient {
//   apiUrl: string | undefined
//   constructor() {
//   }
//   @logMethod('xxxx')
//   getData(...args: any[]) {
//     console.log(args);
//     console.log(this.apiUrl);
//   }
// }
// const http:any = new HttpClient()
// console.log(http.apiUrl);
// http.run()
// http.getData('aaa', 'sss', 333)
// 参数装饰器
function logParams(params) {
    return function (target, paramsName, paramsIndex) {
        console.log('params:' + params);
        console.log('target:');
        console.log(target);
        console.log('paramsName:' + paramsName);
        console.log('paramsIndex:' + paramsIndex);
        target.apiUrl = params;
    };
}
class HttpClient {
    constructor() {
    }
    getData(uid, uuid) {
        console.log('getData' + uid + '--' + uuid);
    }
}
__decorate([
    __param(1, logParams('xxxx'))
], HttpClient.prototype, "getData", null);
const http = new HttpClient();
http.getData(5, 20);
console.log(http.apiUrl);
/**
  * 各装饰器执行顺序：
  * 设置多个同类型装饰器时 遵循就近原则 离装饰对象越近的先执行
  * 属性装饰器=》方法装饰器=》参数装饰器=》类装饰器
 */
