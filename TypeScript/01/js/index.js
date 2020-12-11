"use strict";
//简单封装一个ajax
function ajax(config) {
    const xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (config.dataType == 'json') {
                const res = JSON.parse(xhr.responseText);
                console.log(res);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    url: 'http://127.0.0.1:4000/proxy',
    data: "test",
    dataType: "json"
});
const cot = function (key, value) {
    return key + value;
};
console.log(cot("hi", "TypeScript"));
class Dog {
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        console.log(this.name + 'eat' + food);
    }
}
const dog = new Dog('xiaohei');
dog.eat('falsh');
