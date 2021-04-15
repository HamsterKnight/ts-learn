abstract class Animal1 {
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


class Lion1 extends Animal1 {
  category: string = '狮子'
  singleFire() {
    console.log('进行单火圈表演')
  }
  doubleFire() {
    console.log('进行双火圈表演')
  }
}

class Tiger1 extends Animal1 {
  category: string = '老虎'
  singleFire() {
    console.log('进行单火圈表演')
  }
  doubleFire() {
    console.log('进行双火圈表演')
  }
}

class Monkey1 extends Animal1 {
  category: string = '猴子'
  balance() {
    console.log('进行平衡表演')
  }
  dumuqiao() {
    console.log('进行独木桥表演')
  }
}

class Dog1 extends Animal1 {
  category: string = '狗'
  wisdomMath() {
    console.log('进行数数表演')
  }
}

const animals1 = [
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
animals1.forEach(ani => {
  if(ani instanceof Lion || ani instanceof Tiger) {
    ani.singleFire()
    ani.doubleFire()
  }
})