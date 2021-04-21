
// 类装饰器实例,使用reflect-metadata进行改动
import "reflect-metadata"

// class-validator提供的装饰器，对类的属性进行限制验证
import { Length, Min, validate } from 'class-validator'
import { plainToClass } from "class-transformer"

// class-transfomer将平面对象转化成类

const key = 'decoraer'

@reflectDecorater('用户')
class User {
  @Length(2, 8,  {
    message: '名字最短为两个字符，最长为8个字符',
  })
  @reflectDecorater('姓名')
  name:string

  @Min(0, {message: '年龄不能为负数'})
  @reflectDecorater('年龄')
  age:number
  
  printName() {
    console.log(this.name)
  }
}

function reflectDecorater(props: string) {
  return Reflect.metadata(key, props);
}


const obj20 = new User()

function printObj(obj: any) {
  console.log(Reflect.getMetadata(key, User))
  // 从原型数组中找到相关的值
  // 如果找不到就输出键名

  for(let k in obj) {
    if((obj as Object).hasOwnProperty(k)) {
      const current = Reflect.getMetadata(key, obj, k)
      if(current) {
        console.log(current + ":" + obj[k])
      } else {
        console.log(k + ":" + obj[k])
      }
      
    }

  }
}

obj20.name = '张三'
obj20.age = -1
printObj(obj20)
validate(obj20).then(err => {
  console.log(err)
})

// 下面的对象属于一个平面对象，它没有相关类的操作方法
const obj21 = {
  name: '张二',
  age: 12
}

// 将obj21转化成User的实例对象
const transferUser = plainToClass(User, obj21)
transferUser.printName()
console.log(transferUser instanceof User)