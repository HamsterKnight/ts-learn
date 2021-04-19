
// 类装饰器实例

type constructor =  new(...args: any[]) => object

@classDecorater('类装饰器')
class Decorater {
  
  @propDecorater('属性1')
  name:string

  // @propDecorater('属性2')
  age:number
}

function classDecorater(props: string) {
  return function (target:constructor) {
    target.prototype.$name = props
  }
}

function propDecorater(decorater: string){
  return function(target:any, name: string) {
    if(!target.$propDcorater) {
      target.$propDcorater = []
    } 
    target.$propDcorater.push({
      decorater,
      name
    })
  }
}
const obj = new Decorater()

function printObj(obj: any) {
  if(obj.$name) {
    console.log(obj.$name)
  }
  // 从原型数组中找到相关的值
  // 如果找不到就输出键名

  for(let key in obj) {
    if((obj as Object).hasOwnProperty(key)) {
      const current = obj.$propDcorater.find((_:any) => _.name === key)
      if(current) {
        console.log(current.decorater + ":" + obj[key])
      } else {
        console.log(key + ":" + obj[key])
      }
      
    }

  }
}

obj.name = '张三'
obj.age = 12
printObj(obj)