
// 类装饰器实例,使用reflect-metadata进行改动
import "reflect-metadata"

const key = 'decoraer'

@reflectDecorater('用户')
class Decorater20 {
  
  @reflectDecorater('姓名')
  name:string

  @reflectDecorater('年龄')
  age:number
}

function reflectDecorater(props: string) {
  return Reflect.metadata(key, props);
}


const obj20 = new Decorater20()

function printObj(obj: any) {
  console.log(Reflect.getMetadata(key, Decorater20))
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
obj20.age = 12
printObj(obj20)