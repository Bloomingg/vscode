import { Mysql } from '../modules/db'

class UserClass {
  name: string | undefined;
  age: number | undefined
}

const MysqlModel = new Mysql<UserClass>();

export { UserClass, MysqlModel }

