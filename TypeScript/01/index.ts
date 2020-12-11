//参数接口
interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
}

//简单封装一个ajax
function ajax(config: Config) {
  const xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = function (): void {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (config.dataType == 'json') {
        const res = JSON.parse(xhr.responseText)
        console.log(res)
      } else {
        console.log(xhr.responseText)
      }

    }
  }
}

ajax({
  type: 'get',
  url: 'http://127.0.0.1:4000/proxy',
  data: "test",
  dataType: "json"

})

//函数接口  对方法的传入参数和返回值进行约束
interface ency {
  (key: string, value: string): string
}

const cot: ency = function (key: string, value: string): string {
  return key + value
}

console.log(cot("hi", "TypeScript"));

//类接口
interface Animal {
  name: string
  eat(food: string): void
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  eat(food: string) {
    console.log(this.name + 'eat' + food);

  }
}

const dog = new Dog('xiaohei')
dog.eat('falsh')
