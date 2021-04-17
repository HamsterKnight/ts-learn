class Indexes {
  // 使用了多个索引器，第一个number的值类型，必须为第二string类型的值类型的子类
  [prop:number]: string;
  [prop:string]: string |{():void};
  public name: string;
  constructor(name:string) {
    this.name = name
  }
  sayHello() {
    console.log('你好')
  }
}

const indexes = new Indexes('索引')
// 因为开启了noImplicitAny隐式类型检查，这里用了索引，动态添加成员报错，除非配置了索引器
indexes['testDay'] = '123'