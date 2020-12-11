interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

// 定义一个操作数据库的类
export class Mysql<T> implements DBI<T>{
  add(info: T): boolean {
    console.log(info);
    return true
    // throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
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
    ]
  }

}