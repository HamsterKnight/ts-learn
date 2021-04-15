abstract class Animal {
  name: string;
  age: number;
  abstract category: string;
  constructor( name:string, age:number){
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log(`hello 大家好，我是${this.category}, 我叫${this.name}`)
  };
}

interface IFireShow {
  singleFire():void
  doubleFire():void
}
interface IBalanceShow {
  balance():void
  dumuqiao():void
}
interface IWistomShow {
  wisdomMath():void
}


class Lion extends Animal implements IFireShow {
  category: string = '狮子'
  singleFire() {
    console.log(`进行单火圈表演${this.name}`)
  }
  doubleFire() {
    console.log('进行双火圈表演')
  }
}

class Tiger extends Animal implements IFireShow {
  category: string = '老虎'
  singleFire() {
    console.log(`进行单火圈表演${this.name}`)
  }
  doubleFire() {
    console.log('进行双火圈表演')
  }
}

class Monkey extends Animal implements IBalanceShow {
  category: string = '猴子'
  balance() {
    console.log('进行平衡表演')
  }
  dumuqiao() {
    console.log('进行独木桥表演')
  }
}

class Dog extends Animal implements IWistomShow {
  category: string = '狗'
  wisdomMath() {
    console.log('进行数数表演')
  }
}

const animals = [
  new Lion('小狮子', 2),
  new Tiger('小虎子', 2),
  new Monkey('小猴子', 2),
  new Dog('小狗子', 2)
]

// 下面我们让会各个技能的动物出来表演一下
//1. 会火圈表演的动物，都出来表演
//2 .会平衡表演的动物，都出来表演
//3. 会智慧表演的动物，都出来表演


// 错误场景一： 如果我们没用接口进行约束的话，那么我们判断会各个类型表演技能的动物，是通过动物类型去判断，而不是技能
// animals.forEach(ani => {
//   if(ani instanceof Lion || ani instanceof Tiger) {
//     ani.singleFire()
//     ani.doubleFire()
//   }
// })

// 正确场景，针对每个接口使用类型保护函数, 返回值是boolean
// 注:这里接受的ani不一定是要Animal类型, 从结果上看，我们是要判断某个对象是否有某种能力
// 所以类型保护函数，传的对象类型一般都是Object或者any

function hasFireShow(ani: Object): ani is IFireShow {
  if((ani as IFireShow).singleFire && (ani as IFireShow).doubleFire) {
    return true
  }
  return false
}


// 本来按照下面这个方法判断是最符合逻辑的，但是呢在运行时态，接口是不存在的，所以只能通过类型保护函数来判断
// animals.forEach(ani => {
//   if(ani instanceof IFireShow) {
//     ani.singleFire()
//     ani.doubleFire()
//   }
// })


// 最终使用方法
animals.forEach(ani => {
  if(hasFireShow(ani)) {
    ani.singleFire()
    ani.doubleFire()
  }
})