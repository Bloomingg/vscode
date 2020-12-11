import { UserClass, MysqlModel } from './model/user'

const u = new UserClass()
u.name = "小张";
u.age = 18


MysqlModel.add(u)
console.log(MysqlModel.get(4));
