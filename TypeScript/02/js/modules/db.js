"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysql = void 0;
// 定义一个操作数据库的类
class Mysql {
    add(info) {
        console.log(info);
        return true;
        // throw new Error("Method not implemented.");
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        // throw new Error("Method not implemented.");
        return [
            {
                name: "xiaoming",
                age: 12
            },
            {
                name: "laowang",
                age: 22
            }
        ];
    }
}
exports.Mysql = Mysql;
