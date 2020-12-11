"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./model/user");
const u = new user_1.UserClass();
u.name = "小张";
u.age = 18;
user_1.MysqlModel.add(u);
console.log(user_1.MysqlModel.get(4));
