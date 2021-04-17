class UserThis {
  constructor(public name:string){}
  // 不对this进行约束
  sayHello() {
    console.log('你好', this, this.name)
  }
  // 对this进行约束
  sayGoodBye(this:UserThis) {
    console.log('再见', this, this.name)
  }
}
// 如果类中不对类中this进行约束
const ut = new UserThis('测试')
// 那么这里就会有一个错误使用场景，this会指向undefined，因为在类中声明的函数都是严格模式，this是undefined
// const sh = ut.sayHello
// sh()

// 对this进行约束后，就不能像下面这样调用
// const sG = ut.sayGoodBye
// sG()