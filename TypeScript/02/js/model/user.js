"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlModel = exports.UserClass = void 0;
const db_1 = require("../modules/db");
class UserClass {
}
exports.UserClass = UserClass;
const MysqlModel = new db_1.Mysql();
exports.MysqlModel = MysqlModel;
